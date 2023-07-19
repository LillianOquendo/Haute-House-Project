import React from "react";

function Home() {

    function handleClick() {
        console.log('Clicked!')
    }
        


    return (
            <div className="home-container">
            <span className="book-now-button-container">
                <button type="button" className="book-now-button" onClick={handleClick}>Book Now!</button>
            </span>
            </div>

    )
}
export default Home