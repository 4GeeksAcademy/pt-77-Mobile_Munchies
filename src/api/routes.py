"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vendor
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from werkzeug.security import check_password_hash, generate_password_hash
from flask_cors import cross_origin

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# Allow User to log in with email and password from User or Vendor accounts
@api.route('/token', methods=['POST'])
def token():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"msg": "Missing email or password"}), 400

        user = User.query.filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
            access_token = create_access_token(identity=f"user:{user.id}")
            return jsonify(
                access_token=access_token,
                user={
                    "id": user.id,
                    "email": user.email,
                    "name": user.name
                },
                role="user"
            ), 200

        vendor = Vendor.query.filter_by(email=email).first()
        if vendor and check_password_hash(vendor.password, password):
            access_token = create_access_token(identity=f"vendor:{vendor.id}")
            return jsonify(
                access_token=access_token,
                vendor={
                    "id": vendor.id,
                    "email": vendor.email,
                    "title": vendor.title
                },
                role="vendor"
            ), 200

        return jsonify({"msg": "Bad credentials"}), 401

    except Exception as e:
        print("Error in /api/token:", e)
        return jsonify({"error": "Internal Server Error"}), 500

# Allows logged in user to see their information
@api.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    identity = get_jwt_identity()
    print("JWT identity:", identity)

    try:
        role, id_str = identity.split(":")
        user_id = int(id_str)
    except Exception:
        return jsonify({"msg": "Invalid token format"}), 400

    if role == "user":
        user = User.query.get(user_id)
        if user:
            return jsonify({**user.serialize(), "role": "user"}), 200

    elif role == "vendor":
        vendor = Vendor.query.get(user_id)
        if vendor:
            return jsonify({**vendor.serialize(), "role": "vendor"}), 200

    return jsonify({"msg": "User not found"}), 404


# Allows users to edit their email and name/title
@api.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    identity = get_jwt_identity()
    print("JWT identity:", identity)

    try:
        role, id_str = identity.split(":")
        user_id = int(id_str)
    except Exception:
        return jsonify({"msg": "Invalid token format"}), 400

    data = request.get_json()

    new_email = data.get("email")

    if role == "user":
        new_name = data.get("name")
        if not new_name or not new_email:
            return jsonify({"msg": "Name and email are required"}), 400

        user = User.query.get(user_id)
        if user:
            existing_user = User.query.filter(User.email == new_email, User.id != user.id).first()
            if existing_user:
                return jsonify({"msg": "Email is already in use"}), 400

            existing_vendor = Vendor.query.filter_by(email=new_email).first()
            if existing_vendor:
                return jsonify({"msg": "Email is already in use"}), 400

            user.name = new_name
            user.email = new_email
            db.session.commit()
            return jsonify(user.serialize()), 200

    elif role == "vendor":
        new_title = data.get("title")
        address = data.get("address")
        price = data.get("price")
        picture = data.get("picture")
        calendly_url = data.get("calendly_url")

        if not new_title or not new_email:
            return jsonify({"msg": "Title and email are required"}), 400

        vendor = Vendor.query.get(user_id)
        if vendor:
            existing_vendor = Vendor.query.filter(Vendor.email == new_email, Vendor.id != vendor.id).first()
            if existing_vendor:
                return jsonify({"msg": "Email is already in use"}), 400

            existing_user = User.query.filter_by(email=new_email).first()
            if existing_user:
                return jsonify({"msg": "Email is already in use"}), 400

            vendor.title = new_title
            vendor.email = new_email
            vendor.address = address
            vendor.price = price
            vendor.picture = picture
            vendor.calendly_url = calendly_url
            db.session.commit()
            return jsonify(vendor.serialize()), 200

    return jsonify({"msg": "User not found"}), 404



# Allows users to edit their current password and update their new one
@api.route('/profile/password', methods=['PUT'])
@jwt_required()
def update_password():
    identity = get_jwt_identity()
    role, id_str = identity.split(":")
    user_id = int(id_str)

    data = request.get_json()
    current_password = data.get("current_password")
    new_password = data.get("new_password")

    if not current_password or not new_password:
        return jsonify({"msg": "Current and new password required"}), 400

    if role == "user":
        user = User.query.get(user_id)
        if not user or not check_password_hash(user.password, current_password):
            return jsonify({"msg": "Current password is incorrect"}), 400
        user.password = generate_password_hash(new_password)
        db.session.commit()
        return jsonify({"msg": "Password updated successfully"}), 200

    elif role == "vendor":
        vendor = Vendor.query.get(user_id)
        if not vendor or not check_password_hash(vendor.password, current_password):
            return jsonify({"msg": "Current password is incorrect"}), 400
        vendor.password = generate_password_hash(new_password)
        db.session.commit()
        return jsonify({"msg": "Password updated successfully"}), 200

    return jsonify({"msg": "Invalid user"}), 404

# Allows users to signup their account
@api.route('/signup', methods=['POST'])
@cross_origin()
def signup():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "Name, email and password required"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(
        name=name,
        email=email,
        password=hashed_password,
        is_active=True,
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully, You may Login."}), 201

# Get all Vendors


@api.route('/vendors', methods=['GET'])
def handle_get_vendor():
    vendor = Vendor.query.all()
    all_vendors = list(map(lambda x: x.serialize(), vendor))
    return jsonify(all_vendors), 200

# Get a single Vendor


@api.route('/vendors/<int:vendor_id>', methods=['GET'])
def handle_get_each_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    return jsonify(vendor.serialize()), 200

# Post/Create a Vendor


@api.route('/vendor/signin', methods=['POST'])
def vendor_signin():
    email = request.json.get("email", None)
    password = request.json.get("password", None)


    if not email or not password:
         return jsonify({"msg": "Missing email or password"}), 400
    
    vendor = Vendor.query.filter_by(email=email).first()
    access_token= create_access_token(identity={"id": vendor.id})

    return jsonify({
        "access_token": access_token,
        "vendor": vendor.serialize(),
        "message": "vendor signed in succesfully",

    }), 200

@api.route('/vendor/signup', methods=['POST'])
def vendor_signup():
    title = request.json.get("title", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    address = request.json.get("address", None)
    price = request.json.get("price", None)
    picture = request.json.get("picture", None)
    is_active = request.json.get("is_active", None)
    calendly_url = request.json.get("calendly_url", "None")

    if title is None or email is None or password is None or address is None or price is None or picture is None or is_active is None or calendly_url is None:
        return jsonify({"msg": "Some fields are missing in your request"}), 400

    hashed_password = generate_password_hash(password)
    vendor = Vendor(title=title, email=email, password=hashed_password, address=address,
                price=price, picture=picture, is_active=is_active, calendly_url=calendly_url)
    db.session.add(vendor)
    db.session.commit()
    return jsonify({"message": "Trucker Account registered successfully, You may Login."}), 201

# Edit a Vendor


@api.route('/vendors/<int:vendor_id>', methods=['PUT'])
def update_vendor(vendor_id):
    title = request.json.get("title")
    email = request.json.get("email")
    address = request.json.get("address")
    price = request.json.get("price")
    picture = request.json.get("picture")
    is_active = request.json.get("is_active")
    calendly_url = request.json.get("calendly_url")

    if title is None or email is None or address is None or price is None or picture is None or is_active is None or calendly_url is None:
        return jsonify({"msg": "Some fields are missing in your request"})

    vendor = Vendor.query.get(vendor_id)
    if vendor is None:
        return jsonify({"msg": "vendor not found"})

    vendor.title = title
    vendor.email = email
    vendor.address = address
    vendor.price = price
    vendor.picture = picture
    vendor.is_active = is_active
    vendor.calendly_url = calendly_url

    db.session.commit()
    return jsonify(vendor.serialize()), 200

# Delete a Vendor


@api.route('/vendor/<int:vendor_id>', methods=['DELETE'])
def delete_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    db.session.delete(vendor)
    db.session.commit()
    return jsonify("vendor has been deleted"), 200
