import React from "react";
import Stylist from './Stylist';

function Stylists({stylists}) {
    const mappedStylists = stylists.map((stylists) =>(
        <Stylist 
        name={stylists.stylist_name}
        info={stylists.stylist_info}
        services={stylists.services_provided}
        />
    ))



    return (
        <div className="stylist-container">
            <div className="p-60 pt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {mappedStylists}
            </div>


        </div>

    )
}
export default Stylists