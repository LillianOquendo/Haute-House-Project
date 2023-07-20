import React from "react";


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

        </div>
/*We can use leaflet css to add a map feature to this page. 
Additionally, we can incorporate fake social media buttons*/
    )

}
export default Contact