import React from "react";

function Contact() {
const phoneNumber = '123-456-7891';
const address = '123 1st Ave New York, NY 00000';
const email = 'HauteHouseSalon@randomsite.com'

    return (
        <div>
            <h2 className="text-3xl text-gray-700 font-bold mb-5" >Contact Us</h2>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
        </div>

    )

}
export default Contact