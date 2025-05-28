@app.route('/people', methods=['GET'])
def handle_get_people():
    people = Characters.query.all()
    all_people = list(map(lambda x: x.serialize(), people))
    return jsonify(all_people), 200

@app.route('/vendors', methods=['GET'])
def handle_get_vendor():
    vendor = Vendor.query.all()
    all_vendors = list(map(lambda x: x.serialize(), vendor))
    return jsonify(all_vendors), 200


@app.route('/people/<int:people_id>', methods=['GET'])
def handle_get_each_person(people_id):
    character = Characters.query.filter_by(id = people_id).first()
    return jsonify(character), 200


@app.route('/vendors/<int:vendor_id>', methods=['GET'])
def handle_get_each_vendor(vendor_id):
    vendor = Vendor.query.filter_by(id = vendor_id).first()
    return jsonify(vendor), 200

@api.route('/vendors/<int:vendor_id>', methods=['GET'])
def handle_get_each_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    if not vendor:
        return jsonify({'error': 'Vendor not found'}), 404
    return jsonify(vendor.serialize()), 200



@app.route('/users', methods=['GET'])
def handle_get_user():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200


@app.route('/user', methods=['GET'])
def handle_user_favs():
    body = request.get_json()
    user_login = body["login"]
    user = User.query.filter_by(login = user_login)
    favorites = list(map(lambda x: x.serialize(), user["favorites"]))
    return jsonify(favorites), 200


@app.route('/favorite/people/<int:people_id>', methods=['POST'])
def add_fav_character(people_id):
    body = request.get_json()
    user_id = body["id"]
    favorite = Favorites(user_id = user_id, character_id = people_id, planet_id = None)
    db.session.add(favorite)
    db.session.commit()
    return jsonify("character added to sentence"), 200


@app.route('/favorite/planet/<int:planet_id>', methods=['POST'])
def add_fav_planet(planet_id):
    body = request.get_json()
    user_id = body["id"]
    favorite = Favorites(user_id = user_id, character_id = planet_id, planet_id = None)
    db.session.add(favorite)
    db.session.commit()
    return jsonify("planet added to sentence"), 200


@app.route('/favorite/people/<int:people_id>', methods=['DELETE'])
def delete_fav_character(people_id):
    body = request.get_json()
    user_id = body["id"]
    favorite = Favorites.query.filter_by(user_id = user_id, character_id = people_id).first()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify("character deleted to sentence"), 200


@app.route('/favorite/planet/<int:planet_id>', methods=['DELETE'])
def delete_fav_planet(planet_id):
    body = request.get_json()
    user_id = body["id"]
    favorite = Favorites.query.filter_by(user_id = user_id, planet_id = planet_id).first()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify("character deleted to sentence"), 200


# //////////////////////////////////////////////


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
    existingVendorTitle = Vendor.query.filter_by(title=title).one_or_none()
    if existingVendorTitle:
        return jsonify({"msg": "An account associated with the title already exists"}), 409
    existingVendorCalendlyUrl = Vendor.query.filter_by(calendly_url=calendly_url).one_or_none()
    if existingVendorCalendlyUrl:
        return jsonify({"msg": "An account associated with this url already exists. Please try a different calendly url."}), 409
    
    vendor = Vendor(
        title=title,
        email=email,
        password=generate_password_hash(password),
        address=address,
        price=price,
        picture=picture,
        is_active=is_active,
        calendly_url=calendly_url,
    )
    db.session.add(vendor)
    db.session.commit()
    db.session.refresh(vendor)
    response_body = {
        "msg": "Vendor Account successfully created!",
        "vendor":vendor.serialize()
    }
    return jsonify(response_body), 201


# //////////////////////////////////////////////


@api.route('/user/signup', methods=['POST'])
def user_signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", None)
    
    if is_active is None or email is None or password is None:
        return jsonify({"msg": "Some fields are missing in your request"}), 400
    existingUserEmail = User.query.filter_by(email=email).one_or_none()
    if existingUserEmail:
        return jsonify({"msg": "A user associated with the email already exists"}), 409
    
    user = User(
        email=email,
        password=generate_password_hash(password),
        is_active=is_active
    )
    db.session.add(user)
    db.session.commit()
    db.session.refresh(user)
    response_body = {"msg": "User succesfully created!", "user":user.serialize()}
    return jsonify(response_body), 201