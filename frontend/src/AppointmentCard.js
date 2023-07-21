import React, {useState} from "react";

function AppointmentCard({date, name, id}){

    const [newDate, setDate] = useState('')


    function handleDelete(e) {
        fetch(`/appointments/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        
       alert('Appointment Deleted! Please refresh to reflect changes.')

    }

    function handleSubmit(e) {
        // e.preventDefault()
        console.log(e)
        fetch(`/appointments/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newDate})
        })
        .then(resp => resp.json())
        .then((patchedAppointment) => setDate(newDate))
    }

    

    function handleClick() {
        const form =  document.getElementById(`edit-from${id}`)
        const button = document.getElementById(`edit-button${id}`)

        form.style.display='block'
        button.style.display='none'

        
    }



    return(
        <div className="appointment-card">
        <div className="px-6 py-4 text-hautehouse_ltegold">
        <h1 className="font-bold text-xl mb-2 text-hautehouse_ltegold">{name} has an appointment on: </h1>
            <h1 className="font-bold text-xl mb-2 text-hautehouse_ltegold">{date}</h1>
            <button type="button" onClick={handleDelete} className="text-white">Delete</button><br></br>
            <button type='button' id={`edit-button${id}`} onClick={handleClick} className="text-white">Edit</button>
            <form id={`edit-from${id}`} className="edit-form">
                <label>Enter new date here(mm/dd/yyyy)</label>
                <input type='text' onChange={(e) => setDate(e.target.value)} value={newDate}></input>
                <button type='button' onClick={handleSubmit} className="text-white">Confirm</button>
            </form>
        </div>

        </div>
    )
}


export default AppointmentCard