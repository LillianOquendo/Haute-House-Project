import React from "react";

//import Navbar from "./Header/Navbar";


function About() {
const about_photo = "https://i.ibb.co/1qXqG2T/Screenshot-2023-07-18-223132.jpg"

    return (
        <div className="About-Container">
            <br></br>
            <br></br>
            <h1 className="text-7xl text-center">About Us</h1>
            <br></br>
            <p className="text-center">Welcome to Haute House, where hair dreams come to life!<br></br>
            Our exclusive hair salon is a haven of style, sophistication, and luxury, serving the most discerning clientele in the industry. <br></br>
            With a passion for hair that knows no bounds, our trio of owners and lead stylists Lillian, Tony, and Bryant have been transforming <br></br>
            tresses into works of art for over three years.
            <br></br>
            <br></br>
            With each visit to Haute House, our clients embark on a journey of self-expression, guided by our talented team of stylists. <br></br>
            Whether it's a glamorous Hollywood makeover or a daring transformation, we pride ourselves on delivering exceptional service <br></br>
            that surpasses all expectations.
            </p>
            <div className="h-screen flex items-center justify-center">
            <img src="https://i.ibb.co/1qXqG2T/Screenshot-2023-07-18-223132.jpg" alt="About Photo"/>
            <img src={about_photo} alt="About Photo"/>
            </div>

        </div>

    )
}
export default About