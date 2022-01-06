import {ChangeEvent, ChangeEventHandler, FormEventHandler, useState} from "react";

export function FormularListe() {
    //sagt, dass value veränderbar ist
    const [value, setValue] = useState('');
    //nimmt die Eingabe und setzt diese auf value
    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.currentTarget.value);
    };

    //bei Klick auf erstellen mache Folgendes
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        alert('A name was submitted: ' + value);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Liste:
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="erstellen" />
        </form>
    );
}
