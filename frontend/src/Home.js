import React from "react";

function Home() {

    function handleClick() {
        console.log('Clicked!')
    }
        


    return (
            <div className="home-container">
            <div className="book-now-button-container">
                <button type="button" className="book-now-button" onClick={handleClick}>Book Now!</button>
            </div>
            </div>

    )
}
export default Home