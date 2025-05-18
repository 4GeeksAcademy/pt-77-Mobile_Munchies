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

# Post and Create a Vendor

# Edit a Vendor
# Delete a Vendor