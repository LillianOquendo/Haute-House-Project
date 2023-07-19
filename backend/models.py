from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Stylist(db.Model, SerializerMixin):
    __tablename__ = 'stylists'

    id = db.Column(db.Integer, primary_key=True)
    stylist_name = db.Column(db.String)
    stylist_info = db.Column(db.String)
    services_provided = db.Column(db.String)
    
    #add relationship
    appointments = db.relationship('Appointment', backref='stylists')
    
    #add serialization
    serialize_rules = ('-appointments.stylist')

class Service(db.Model, SerializerMixin):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    service_name = db.Column(db.String)
    service_price = db.Column(db.String)
    service_description = db.Column(db.String)

    #add relationship
    appointments = db.relationship('Appointment', backref='service')

    #add serialization
    serialize_rules = ('-appointments.service')

class Appointment(db.Model, SerializerMixin):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer,primary_key=True)
    client_name = db.Column(db.String)
    app_time = db.Column(db.String)
    con_req = db.Column(db.Boolean) #con = consultation, req = request
    
    #add relationship

    stylist_id = db.Column(db.Integer, db.ForeignKey('stylists.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))


    #add serialization
    serialize_rules = ('-stylist.appointments', '-service.appointments')

    #validations
    @validates('client_name')
    def validate_name(self, key, client_name):
        if client_name.len() > 3:
            return client_name
        else:
            raise ValueError('Names must be longer than 3 Characters')
        
    @validates('app_time')
    def validate_time(self, key, app_time):
        cutoff = datetime.datetime(2023, 8, 17)
        
        if app_time == cutoff:
            print('out of date range')
            raise ValueError('Please pick a date prior to 08/17/23')
        else:
            return app_time