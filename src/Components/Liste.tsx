import "../Components/Liste.css"
import Header from "./Header";
import {FormularArtikel} from "../services/FormularArtikel";

export function Liste({titleListe}: {titleListe: string}){
    return(<div>
        <Header title={titleListe}/>
            <FormularArtikel/>
        <ul>
            <li>Hund</li>
            <li>Katze</li>
        </ul>
        </div>
    )
}