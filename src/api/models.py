from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    bookings=relationship("Booking", back_populates="user")



    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_active": self.is_active
        }
    
class Vendor(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(String(120), nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    address: Mapped[str] = mapped_column(nullable=False)
    price: Mapped[int] = mapped_column(nullable=False)
    picture: Mapped[str] = mapped_column(nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)
    calendly_url: Mapped[str] = mapped_column(String(120), nullable=True)#change to False later
    bookings=relationship("Booking", back_populates="vendor")
    

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "email": self.email,
            "address": self.address,
            "price": self.price,
            "picture": self.picture,
            "is_active": self.is_active,
            "calendly_url": self.calendly_url
            # do not serialize 
            # 
            # the password, its a security breach
        }
    
class Booking(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)
    booking_date: Mapped[datetime] = mapped_column(nullable=False)
    
    vendor_id: Mapped[int] = mapped_column(ForeignKey("vendor.id"), nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    vendor=relationship("Vendor", back_populates="bookings")
    user=relationship("User", back_populates="bookings")

    def serialize(self):
        return {
            "id": self.id,
            "vendor_id": self.vendor_id,
            "user_id": self.user_id,
            "title": self.title,
            "is_active": self.is_active,
            "booking_date": self.booking_date
            # do not serialize the password, its a security breach
        }
