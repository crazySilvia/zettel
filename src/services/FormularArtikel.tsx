import {ChangeEvent, ChangeEventHandler, FormEventHandler, useState} from "react";

interface FormularArtikelProps{
    updateArtikelList: (value: string) => void
}

export function FormularArtikel(props:FormularArtikelProps) {
    //sagt, dass der value veränderbar ist
    const [value, setValue] = useState('');

    //nimmt die Eingabe und setzt diese auf value
    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
         setValue(event.currentTarget.value);
     };

    //bei Klick auf hinzufügen mache Folgendes
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        //ruft
        props.updateArtikelList(value)
        //leert value
        setValue("")
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Artikel:
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="hinzufügen" />
        </form>
    );
}
