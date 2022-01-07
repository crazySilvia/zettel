import "../Components/Liste.css"
import Header from "./Header";
import {FormularArtikel} from "../services/FormularArtikel";
import {Interface} from "readline";

interface ListeProps{
    liste:string

}

export function Liste(props:ListeProps){
    return(<div>
        <Header title={props.liste}/>
            <FormularArtikel/>
        <ul>

        </ul>
        </div>
    )
}