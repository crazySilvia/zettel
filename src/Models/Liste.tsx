import "../Components/Liste.css"
import React, {useState} from "react";
import Artikel from "./Artikel";
import {FormularListe} from "../services/FormularListe";

export function Liste(){
    //erstellt und aktualisiert Liste
    //da die Liste leer ist aber TypeScript Typen braucht, typecasten
    //wir hier das Array in ein Stringarray durch "as Array<string>"
    const [artikel, setArtikel] = useState([] as Array<string>);

    const updateArtikel = (title:string) => {
        //erstellt Kopie der Liste und
        //fügt neue Liste direkt hinzu
        const aktuellerStand = [...artikel, title];
        //setzt Liste auf aktuellem Stand
        setArtikel(aktuellerStand)
    }

    const deleteList = () => {
        setArtikel([])
    }

    //bei Klick auf löschen mache Folgendes
        const deleteArtikel = (index:number) => {
            //neues Array mit alten Daten
        let aktuelleListe = [...artikel]
        aktuelleListe.splice(index, 1)
        setArtikel(aktuelleListe)
    }

    return(<div>
            <FormularListe updateList={updateArtikel} />
            <button onClick={deleteList}>Liste löschen</button>
            <ul>{artikel.map((value, index) =>
                (<li key={index}>
                    <Artikel name={value} anzahl={1} index={index} button={deleteArtikel} />

                </li>))}
        </ul>
        </div>
    )
}