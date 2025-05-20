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

    vendor = User(title=title, email=email, password=password, address=address,
                  price=price, picture=picture, is_active=is_active, calendly_url=calendly_url)
    db.session.add(vendor)
    db.session.commit()
    return jsonify(vendor.serialize()), 200

# Edit a Vendor

@api.route('/vendors/<int:vendor_id>', methods=['PUT'])
def update_vendor(vendor_id):
    if vendor_id not in Vendor:
        return jsonify({"error": "Vendor not found"}), 404

        data = request.get_json()
    title = data['title']
    email = data['email']
    password = data['password']
    address = data['address']
    price = data['price']
    picture = data['picture']
    is_active = data['is_active']
    calendly_url = data['calendly_url']

    if (title != "") Vendor[vendor_id]['title'] = data['title']
    if (email != "") Vendor[vendor_id]['email'] = data['email']
    if (password != "") Vendor[vendor_id]['password'] = data['password']
    if (address != "") Vendor[vendor_id]['address'] = data['address']
    if (price != "") Vendor[vendor_id]['price'] = data['price']
    if (picture != "") Vendor[vendor_id]['picture'] = data['picture']
    if (is_active != "") Vendor[vendor_id]['is_active'] = data['is_active']
    if (calendly_url != "") Vendor[vendor_id]['calendly_url'] = data['calendly_url']
    return jsonify({"message": "Vendor updated", "vendor": Vendor[vendor_id]}), 200

# Delete a Vendor

@api.route('/vendor/<int:vendor_id>', methods=['DELETE'])
def delete_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    db.session.delete(vendor)
    db.session.commit()
    return jsonify("vendor has been deleted"), 200