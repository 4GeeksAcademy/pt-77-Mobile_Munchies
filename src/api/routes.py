"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
        return jsonify(access_token=access_token)

    except Exception as e:
        print("Error in /api/token:", e)
        return jsonify({"error": "Internal Server Error"}), 500


@api.route('/signup', methods=['POST'])
@cross_origin(origin="https://miniature-zebra-g4xw6c9j7r-3000.app.github.dev")
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password required"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409
    
    hashed_password = generate_password_hash(password)
    new_user = User(
        email=email,
        password=hashed_password,
        is_active=True
    )

    new_user = User(email=email, password=password, is_active=True)
    db.session.add(new_user)
    db.session.commit()


    return jsonify({"message": "User registered successfully"}), 201

