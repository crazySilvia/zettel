import {Liste} from "./Liste";
import React, {useState} from "react";
import "../Components/Listen.css"
import {FormularListe} from "../services/FormularListe";
import Header from "./Header";

interface ListenProps{
    listen:string[]
}

export function Listen(props:ListenProps){



    return <div>
        <Header title="Listen"/>
        <ul>{props.listen.map((value, index) =>
            (<li key={index}>
                <Liste liste={value}/>
            </li>)
        )}
        </ul>
    </div>
}