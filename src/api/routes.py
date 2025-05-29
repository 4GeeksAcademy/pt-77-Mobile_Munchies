"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vendor
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from werkzeug.security import generate_password_hash
from flask_cors import cross_origin

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/token', methods=['POST'])
def token():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"msg": "Missing email or password"}), 400

        user = User.query.filter_by(email=email).first()
        if not user or user.password != password:
            return jsonify({"msg": "Bad credentials"}), 401
        
        access_token = create_access_token(identity=user.id)

        return jsonify(
            access_token=access_token,
            user={
                "id": user.id,
                "email": user.email,
                "name": user.name
            }
        )

    except Exception as e:
        print("Error in /api/token:", e)
        return jsonify({"error": "Internal Server Error"}), 500



@api.route('/signup', methods=['POST'])
@cross_origin(origin="https://miniature-zebra-g4xw6c9j7r-3000.app.github.dev")
def signup():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "Email and password required"}), 400

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

    new_user = User(email=email, password=password, name=name, is_active=True)
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
        return jsonify({"msg": "Some fields are missing in your request"})

    vendor = Vendor(title=title, email=email, password=password, address=address,
                    price=price, picture=picture, is_active=is_active, calendly_url=calendly_url)
    db.session.add(vendor)
    db.session.commit()
    return jsonify(vendor.serialize()), 200

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
