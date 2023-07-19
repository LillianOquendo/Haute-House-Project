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
        services_to_dict = [service.to_dict() for service in services]

        response = make_response(jsonify(services_to_dict), 200)

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

            response = make_response(jsonify(vendor.to_dict()), 200)

            return response
        
        else:

            response = make_response({"error": "Stylist not found"}, 404)

            return response
        
api.add_resource(StylistsById, '/stylists/<int:id>')