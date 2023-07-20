import React from "react";
import Banner from './Header/Banner'

function Home() {

    function handleClick() {
       const form =  document.getElementById('book-now-form')
       const button = document.getElementById('book-now')

        form.style.display='block'
        button.style.display='none'

        
    }

    function handleCloseForm(event) {
        const form = document.getElementById('book-now-form')
        const button = document.getElementById('book-now')

        form.style.display='none'
        button.style.display='block'

        event.preventDefault();

    }
        


    return (
            <div className="home-container">
                <p className='text-hautehouse_yellow text-xl text-center font-veganstyle'>HAUTE HOUSE</p>
                <Banner />
            <span className="book-now-button-container">
                <button type="button" className="book-now-button" onClick={handleClick} id="book-now">Request An Appointment!</button>
            <span className="book-now-form-container" id="book-now-form">
                <p className='text-hautehouse_yellow text-xl text-center font-veganstyle'>Send us a request for an appointment and we will reachout within 48 hours! :)</p>
                <form>
                    <label for='fname' className="text-hautehouse_yellow">First Name:</label><br></br>
                    <input type='text' id='fname'></input><br></br>
                    <label for='lname' className="text-hautehouse_yellow">Last Name:</label><br></br>
                    <input type='text' id='lname'></input><br></br>
                    <label for='services' className="text-hautehouse_yellow">Services</label><br></br>
                    <select name="select-services" id="select-services">
                        <option value='Haircut (Medium - Long Hair) $55.00'>Haircut (Medium - Long Hair) $55.00</option>
                        <option value='Haircut (Short Hair) $35.00'>Haircut (Short Hair) $35.00</option>
                        <option value='Blowdry $50.00'>Blowdry $50.00</option>
                        <option value='Cut & Blowdry $85.00'>Cut & Blowdry $85.00</option>
                        <option value='Single Process $90.00'>Single Process $90.00</option>
                        <option value='Full Balayage $250.00'>Full Balayage $250.00</option>
                        <option value='Partial Balayage $155.00'>Partial Balayage $155.00</option>
                        <option value='Half Balayage $185.00'>Half Balayage $185.00</option>
                        <option value='Full Highlights $175.00'>Full Highlights $175.00</option>
                        <option value='Partial Highlights $120.00'>Partial Highlights $120.00</option>
                        <option value='Half Highlights $150.00'>Half Highlights $150.00</option>
                        <option value='Olaplex Treatment $50.00'>Olaplex Treatment $50.00</option>
                        <option value='Brazilian Blowout $300.00'>Brazilian Blowout $300.00</option>
                        <option value='Keratin Treatment $350.00'>Keratin Treatment $350.00</option>
                        <option value='Kids Haircut $35.00'>Kids Haircut $35.00</option>
                        <option value='Beard Trim $30.00'>Beard Trim $30.00</option>
                        <option value='Haircut and Beard Trim $50.00'>Haircut and Beard Trim $50.00</option>
                    </select><br></br>
                    <label for='appt-time' className="text-hautehouse_yellow">Requested Appointment Date</label><br></br>
                    <input type="date" id='appt-date'></input><br></br>
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