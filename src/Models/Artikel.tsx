import React from "react";

interface ArtikelProps{
    anzahl?: number;
    name: string
    button: (item:number) => void
    index:number
}

export default function Artikel(props:ArtikelProps){
    return(
        <p>
            {props.name}{/*props.anzahl}{/* {props.id}*/}
            <button onClick={()=>props.button(props.index)}>löschen</button>
        </p>
    )
}