import React from "react";
import CampersListItems from "./CampersListItems";

const CamperList = ({campers})=> {
    const items = campers.map((camper,index)=>{
       return <CampersListItems  key={index} number={index+1} camper={camper}/>;
    });
    return (
        <tbody>
        {items}
        </tbody>
        );
};

export default CamperList;