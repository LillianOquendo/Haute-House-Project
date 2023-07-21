import React, {useState, useEffect} from "react";
import Banner from './Header/Banner'
import Stylist from "./Stylist";

 
function Home({stylists}) {
    const [appointments, setAppointments] = useState([])
    const [client_name, setClient_Name] = useState('')
    const [service_id, setServices_ID] = useState('')
    const [stylist_id, setStylist_ID] = useState('')
    const [app_date_time, setAppt_Date_Time] = useState('')

    useEffect(() => {
        fetch('/appointments')
        .then(resp => resp.json())
        .then(appointments => setAppointments(appointments))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const new_appointment = {
            client_name: client_name,
            service_id: service_id,
            stylist_id: stylist_id,
            app_date_time: app_date_time
        }

        fetch('/appointments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(new_appointment)
        })
        .then(resp => resp.json())
        .then(new_appointment => setAppointments([...appointments, new_appointment]))

    }

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
                <p className='text-hautehouse_yellow text-xl text-center font-veganstyle'>Send us a request for an appointment and we will reach out within 48 hours! ✂️</p>
                <form onSubmit = {handleSubmit}>
                    <label for='client-name' className="text-hautehouse_yellow">First & Last Name:</label><br></br>
                    <input type='text' id='client_name' onChange={(e) => setClient_Name(e.target.value)} name='client_name' value={client_name}></input><br></br>
                    <label for='services' className="text-hautehouse_yellow">Services</label><br></br>
                    <select name="service_id" id="service_id" onChange={(e) => setServices_ID(e.target.value)} value={service_id}>
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
                    <label for='stylists' className="text-hautehouse_yellow">Stylists</label><br></br>
                        <select name="stylist_id" id="stylist_id" onChange={(e) => setStylist_ID(e.target.value)} value={stylist_id}>
                        <option value='3'>Bryant</option>
                        <option value='1'>Lillian</option>
                        <option value='2'>Tony</option>
                        </select><br></br>
                    <label for='appt-req' className="text-hautehouse_yellow">Requested Appointment Date & Time</label><br></br>
                    <input type="text" id='appt-date-time' name='apptDateTime' onChange={(e) => setAppt_Date_Time(e.target.value)} value={app_date_time}></input><br></br>
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