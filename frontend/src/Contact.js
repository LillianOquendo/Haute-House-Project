import React from "react";


function Contact() {
    const phoneNumber = '123-456-7891';
    const address = '123 1st Ave, New York, New York 10009';
    const email = 'HauteHouseSalon@randomsite.com';

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
            
        </div>
/*We can use leaflet css to add a map feature to this page. 
Additionally, we can incorporate fake social media buttons*/
    )

}
export default Contact