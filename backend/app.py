from models import db, Stylist, Service, Appointment
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify #may not need jsonify
from flask_restful import Api, Resource
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app) #may or may not use RESTful 

@app.route('/')
def home():
    return ''

class Services(Resource):
    def get(self):
        services = Service.query.all()
        print(services)
        services_to_dict = [service.to_dict() for service in services]

        response = make_response(services_to_dict, 200)

        return response

api.add_resource(Services, '/services')

class Stylists(Resource):
    def get(self):
        stylists = Stylist.query.all()
        stylists_to_dict = [stylist.to_dict() for stylist in stylists]

        response = make_response(jsonify(stylists_to_dict), 200)

        return response

api.add_resource(Stylists, '/stylists')


class StylistsById(Resource):
    def get(self, id):
        stylist = Stylist.query.filter(Stylist.id == id).first()

        if stylist:

            response = make_response(jsonify(stylist.to_dict()), 200)

            return response
        
        else:

            response = make_response({"error": "Stylist not found"}, 404)

            return response
        
api.add_resource(StylistsById, '/stylists/<int:id>')

class Appointments(Resource):
    def post(self):

        data = request.get_json()

        try:

            new_appoinment = Appointment(
                client_name = data['client_name'],
                app_date_time = data['app_date_time'],
                stylist_id = data['stylist_id'],
                service_id = data['service_id']
            )

            db.session.add(new_appoinment)
            db.session.commit()

            response = make_response(jsonify(new_appoinment.to_dict()), 201)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response
    
api.add_resource(Appointments, '/appointments')


class AppointmentsById(Resource):
    def patch(self, id):
        appointment = Appointment.query.filter(Appointment.id == id).first()
        data = request.get_json()

        try:
            
            for key in data:
                setattr(appointment, key, data[key])

            db.session.add(appointment)
            db.session.commit()

            response = make_response(jsonify(appointment.to_dict()), 202)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response
    
    def delete(self, id):
        appointment = Appointment.query.filter(Appointment.id == id).first()

        if appointment:
            
            db.session.delete(appointment)
            db.session.commit()

            response = make_response({}, 204)
        
        else:   
            response = make_response({"error":"Appointment not found"}, 404)
            
        return response
  
api.add_resource(AppointmentsById, '/appointments/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)