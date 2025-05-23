"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vendor
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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
