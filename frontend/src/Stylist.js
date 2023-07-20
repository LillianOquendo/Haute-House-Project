import React from "react";

function Stylist({name, info, services }) {


    return (
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-antiflashwhite border-green-600 border-2">

  {/* <img className="object-scale-down h-48 w-96" src={image} alt={gameTitle}/> This is where we hardcode an image*/}

  <div className="px-6 py-4">
    <h1 className="font-bold text-xl mb-2">{name}</h1>
    <h2 className="font-style: italic font font-semibold text-xs mb-2">{info}</h2>
    <h3 className ="font-style: italic font font-semibold text-xs mb-2" >{services}</h3>
  </div>

</div>
    )
}
export default Stylist