import React from "react";
import Banner from './Header/Banner'

function Home() {

    function handleClick() {
       const form =  document.getElementById('book-now-form')
       const button = document.getElementById('book-now')

        form.style.display='block'
        button.style.display='none'
    }

    function handleCloseForm() {
        const form = document.getElementById('book-now-form')
        const button = document.getElementById('book-now')

        form.style.display='none'
        button.style.display='block'

    }
        


    return (
            <div className="home-container">
                <p className='text-hautehouse_yellow text-xl text-center'>HAUTHOUSE</p>
                <Banner />
            <span className="book-now-button-container">
                <button type="button" className="book-now-button" onClick={handleClick} id="book-now">Book Now!</button>
            <span className="book-now-form-container" id="book-now-form">
                <form>
                    <label for='fname' className="text-hautehouse_yellow">First Name:</label><br></br>
                    <input type='text' id='fname'></input><br></br>
                    <label for='lname' className="text-hautehouse_yellow">Last Name:</label><br></br>
                    <input type='text' id='lname'></input><br></br>
                    <button className="text-hautehouse_yellow p-5">Submit</button>
                    <button onClick={handleCloseForm} className="text-hautehouse_yellow">Close Form</button>
                </form>
            </span>
            </span>
            <div>
                <span>
                    {/* This is where the services/images of services go */}
                </span>
            </div>
            </div>

    )
}
export default Home