import "../Pages/Mainpage.css"
import Header from "../Components/Header";
import React, {useState} from "react";
import {FormularListe} from "../services/FormularListe";
import {Listen} from "../Components/Listen";

export default function Mainpage(){

    //erstellt und aktualisiert Liste der Listen
    const [list, setList] = useState([""]);

    const updateList = (title:string) => {
        //erstellt Kopie der Liste und
        //fügt neue Liste direkt hinzu
         const aktuellerStand = [...list, title];
         //setzt Liste auf aktuellem Stand
         setList(aktuellerStand)
    }

    //gibt an, was auf der Mainpage rauskommen soll
    return(
        <div className="mainpage">
            <Header title="Einkaufszettel"/>
            <FormularListe updateList={updateList}  />
            <Listen listen={list} />
        </div>
    )
}
