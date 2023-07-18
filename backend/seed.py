from app import app
from models import db, Stylist, Appointment, Service
from faker import Faker

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')
        Stylist.query.delete()
        Appointment.query.delete()
        Service.query.delete()

        print("seeding stylists")
        stylists = [
                
                Stylist(
                stylist_name = "Lillian",
                stylist_info = '''Lillian studied at Empire Beauty School. She's cut hair since the tender age of 4 
                when she took some scissors to her own hair. She can cut hair of all lengths and textures with ease and very few people ever complain.'''
                ),
                Stylist(
                stylist_name = "Tony",
                stylist_info =  '''Tony studied at Modern International Beauty School. He's cut hair since the age of 20 and
                has become an expert with scissors. He's not the best with clippers but is eager to learn!'''
                ),
                Stylist(
                stylist_name = "Bryant",
                stylist_info =  '''Bryant studied at Formula B Parisien Beauty School. He's cut hair since the age of 16 starting with friends and family.
                He loves all things hair and is currently the designer of HairChic a clothing line created with leftover hair clippings.'''
                )
                ]
                #stylists[0]['stylist_name']
        db.session.add_all(stylists)

        print("seeding services")
        services = [
                Service(
                    service_name = "Haircut (Medium - Long Hair)",
                    service_price = "55.00",
                    service_description = "Duration varies, medium hair is considered anything at or past the shoulders"
                ),
                Service(
                    service_name = "Haircut (Short Hair)",
                    service_price = "35.00",
                    service_description = "Duration varies, short hair is considered anything at or above the ears."
                ),
                Service(
                    service_name = "Blowdry",
                    service_price = "50.00",
                    service_description ="Duration varies, hair will be blown out according to customer's desire"
                ),
                Service(
                    service_name = "Cut & Blowdry",
                    service_price = "85.00",
                    service_description = "Duration varies, hair will be both cut and blown out."
                    ),
                
                Service(
                    service_name = "Single Process",
                    service_price = "90.00",
                    service_description = "Root touch up which will match your base in order to cover gray hairs or growth"
                    ),
                Service(
                    service_name = "Full Balayage",
                    service_price = "250.00",
                    service_description = "Free-hand painted highlights creating a soft and natural gradation of lightness towards the ends"
                    ),
                Service(
                    service_name = "Partial Balayage",
                    service_price = "155.00",
                    service_description ='''This is the section of hair following the center line and is reccomended as maintenance or to create
                    dimension  when booking single process'''
                    ),
                Service(
                    service_name = "Half Balayage",
                    service_price = "185.00",
                    service_description ="Recommended as a service to maintain previously done balayage"
                    ),
                Service(
                    service_name = "Full Highlights",
                    service_price = "175.00",
                    service_description = "Recommended for all clients getting highlights for the first time or who are overdue for a touch up"
                    ),
                Service(
                    service_name = "Partial Highlights",
                    service_price = "120.00",
                    service_description ='''This is the section of hair following the center line and is recommended as maintenance or to create
                    dimension  when booking single process'''
                    ),
                Service(
                    service_name = "Half Highlights",
                    service_price = "150.00",
                    service_description ="Recommended as a service to maintain previously done highlight"
                    ),
                Service(
                    service_name = "Olaplex Treatment",
                    service_price = "50.00",
                    service_description ="Olaplex formula is applied to the hair to protect and strengthen it while creating vibrant long lasting color"
                    ),
                Service(
                    service_name = "Brazilian Blowout",
                    service_price = "300.00",
                    service_description ="Benefits include softer, shinier, easier to manage hair with less frizz for weeks."
                    ),
                Service(
                    service_name = "Keratin Treatment",
                    service_price = "350.00",
                    service_description ="Benefits include softer, shinier, easier to manage hair with less frizz for weeks."
                    ),
                Service(
                    service_name = "Kids Haircut",
                    service_price = "35.00",
                    service_description ="Kids will receive a quick cut that will please both them and their parents in a safe and comfortable environment."
                    ),
                Service(
                    service_name = "Beard Trim",
                    service_price = "30.00",
                    service_description ="Beards will be trimmed"
                    ),
                Service(
                    service_name = "Haircut and Beard Trim",
                    service_price = "50.00",
                    service_description ="The blend of style and sophistication with our premier haircut and beard trim service."
                    ),
                
                ]
        db.session.add_all(services)

        # print ("seeding appointments")
        # def create_appointments():
        #     appointments = []
        #     for _ in range (20):
        #         a = Appointment(
        #             client_name = fake.first_name(),
        #             app_time = fake.date_time_this_month()
        #         )
        #         appointments.append(a)

            # db.session.add_all(appointments)
        db.session.commit()

        print('done seeding!')

