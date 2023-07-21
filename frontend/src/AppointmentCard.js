import React from "react";

function AppointmentCard({date, name}){

    return(
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-antiflashwhite border-green-600 border-2">

<div className="px-6 py-4">
<h1 className="font-bold text-xl mb-2">{name} has an appointment on: </h1>
    <h1 className="font-bold text-xl mb-2">{date}</h1>
</div>

</div>
    )
}

export default AppointmentCard