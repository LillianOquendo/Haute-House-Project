import React, {useState, useEffect} from "react";
import AppointmentCard from './AppointmentCard'


function Appointment({newAppointment}){
const mappedAppt = newAppointment.map((newAppointment) =>(
    <AppointmentCard
    name = {newAppointment.client_name}
    date = {newAppointment.app_date_time}
    service = {newAppointment.service}
    />
))
    return (
        <div className="stylist-container">
            <div className="p-60 pt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {mappedAppt}
            </div>
        </div>
    )}   

export default Appointment

//to do: display booked appointments, simple table display with service and date. Date is priority. Do this with a map
//look at stylist for map example instead of mapping through you just need to grab the appointment service and date information
//should be grabbing an empty array