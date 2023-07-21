import React from "react";

function Contact() {
    const phoneNumber = '123-456-7891';
    const address = '11 Broadway, New York, NY 10004';
    const email = 'HauteHouseSalon@randomsite.com'


    return (
        <div>
            
            <h2 className="text-7xl text-center text-hautehouse_yellow" >Contact Us</h2>
            <p className="text-xl text-center text-hautehouse_yellow">Phone: {phoneNumber}</p>
            <p className="text-xl text-center text-hautehouse_yellow">Address: {address}</p>
            <p className="text-xl text-center text-hautehouse_yellow">Email: {email}</p>
            <img className="map" src={process.env.PUBLIC_URL + '/map.png'} alt="screengrab"></img>

        </div>
    )
}

/*We can use leaflet css to add a map feature to this page. 
Additionally, we can incorporate fake social media buttons*/
export default Contact