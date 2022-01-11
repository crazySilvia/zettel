import "../Pages/Mainpage.css"
import Header from "../Components/Header";
import React from "react";
import {Liste} from "../Models/Liste";

export default function Mainpage(){
    //gibt an, was auf der Mainpage rauskommen soll
    return(
        <div className="mainpage">
            <Header title="Einkaufszettel"/>
            <Liste />
        </div>
    )
}