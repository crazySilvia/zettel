import "../Components/Liste.css"
import {FormularArtikel} from "../services/FormularArtikel";
import React, {useState} from "react";
import Artikel from "../Models/Artikel";

interface ListeProps{
    artikel:string[]
}

export function Liste(props:ListeProps){

//erstellt und aktualisiert Artikelliste
const [list, setList] = useState([""]);

const updateArtikelList = (title:string) => {
    //erstellt Kopie der Liste und
    //fügt neue Liste direkt hinzu
    const aktuellerStand = [...list, title];
    //setzt Liste auf aktuellem Stand
    setList(aktuellerStand)
}
    return(<div>

        <ul>{props.artikel.map((value, index) =>
            (<li key={index}>
                <Artikel name={value} />
            </li>)
        )}

        </ul>
        </div>
    )
}

//{id={5}