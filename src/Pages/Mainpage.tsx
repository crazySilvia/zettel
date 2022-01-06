import "../Pages/Mainpage.css"
import Header from "../Components/Header";
import React from "react";
import {NameForm} from "../Models/Formular";

export default function Mainpage(){
    return(<div className="mainpage">
            <Header title="Zettel"/>
            <NameForm/>
    </div>
     )
}