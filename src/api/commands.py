
import click
from api.models import db, User, Vendor

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""


def setup_commands(app):
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    food_trucks = [
        {
            "title": "Sunset Smash",
            "address": "11941 San Vicente Blvd, Los Angeles, CA 90049",
            "price": 1,
            "email": "test@test.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Leo's Tacos Truck",
            "address": "1515 S La Brea Ave, Los Angeles, CA 90019",
            "price": 2,
            "email": "test@test1.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Tamix Mexican Food Truck",
            "address": "4817 W Pico Blvd, Los Angeles, CA 90019",
            "price": 3,
            "email": "test@test2.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Los Brothers Food Truck",
            "address": "1324 Wilshire Blvd, Los Angeles, CA 90017",
            "price": 4,
            "email": "test@test3.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Tacos De Valle Al Carbon",
            "address": "12402 Washington Pl, Los Angeles, CA 90066",
            "price": 5,
            "email": "test@test4.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Tacos Como En El D.F. Taco Truck",
            "address": "2431 W Washington Blvd, Los Angeles, CA 90018",
            "price": 6,
            "email": "test@test5.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Chiquis Taco Truck",
            "address": "1029 Vine St, Los Angeles, CA 90038",
            "price": 7,
            "email": "test@test6.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Bun & Blanket",
            "address": "422 Magnolia Ave, Glendale, CA 91204",
            "price": 8,
            "email": "test@test7.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "Birrieria Los Gonzalez - Lunch Truck",
            "address": "2524 Maple Ave, Los Angeles, CA 90011",
            "price": 9,
            "email": "test@test8.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },
        {
            "title": "El Flamin Taco - Korea Town",
            "address": "505 Vermont Ave, Los Angeles, CA 90020",
            "price": 10,
            "email": "test@test9.com",
            "password": "test1",
            "calendly_url": "https://calendly.com/mobilemunchies/30min"
        },

    ]

    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        for truck in food_trucks:
            vendor = Vendor()
            vendor.title = truck["title"]
            vendor.address = truck["address"]
            vendor.price = truck["price"]
            vendor.email = truck["email"]
            vendor.password = truck["password"]
            vendor.is_active = True
            vendor.calendly_url = truck["calendly_url"]
            db.session.add(vendor)
            db.session.commit()
            print("Vendor: ", vendor.email, " created.")
