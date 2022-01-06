import "../Pages/Mainpage.css"
import Header from "../Components/Header";
import React from "react";
import {Liste} from "../Components/Liste";
import {FormularListe} from "../services/FormularListe";
import {Listen} from "../Components/Listen";

export default function Mainpage(){
    return(
        <div className="mainpage">
            <Header title="Einkaufszettel"/>
            <FormularListe/>
            <Listen />
        </div>

    )
}