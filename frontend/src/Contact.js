import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


function Contact() {
const phoneNumber = '123-456-7891';
const address = '123 1st Ave New York, NY 00000';
const email = 'HauteHouseSalon@randomsite.com'
const contact_image = "https://i.ibb.co/Mc7PQPx/single-process-hair-dye.jpg"

    return (
        <div>
            
            <h2 className="text-7xl text-center" >Contact Us</h2>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
            <img src={contact_image} alt="Contact Photo"/>

            <div className="map">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
/*We can use leaflet css to add a map feature to this page. 
Additionally, we can incorporate fake social media buttons*/
    )

}
export default Contact