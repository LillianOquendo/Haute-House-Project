import React, {useState, useEffect} from "react";

function Appointment(){
const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch("/appointments")
        .then(resp => resp.json())
        .then(data => setAppointments(data))
    },[])
    
    return (
    <div></div>
    
    )}   

export default Appointment