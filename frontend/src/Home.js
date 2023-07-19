import React from "react";

function Home() {

    function handleClick() {
        console.log('Clicked!')
    }
        


    return (

            <div className="book-now-button-container">
                <button type="button" className="book-now-button" onClick={handleClick}>Book Now!</button>
            </div>

    )
}
export default Home