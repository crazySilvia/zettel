import {Liste} from "./Liste";
import React from "react";

export function Listen(){
    return <div>
        <ul>
            <li>
                <Liste titleListe="Kakao"/>
                <Liste titleListe="Obst"/>
                <Liste titleListe="Gemüse"/>
                <Liste titleListe="Geschenke"/>
                <Liste titleListe="Campingplatz"/>
                <Liste titleListe="Dana "/>
            </li>
        </ul>
    </div>
}