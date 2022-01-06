import {ChangeEvent, ChangeEventHandler, FormEventHandler, useState} from "react";

export function NameForm() {
    const [value, setValue] = useState('');
    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
         setValue(event.currentTarget.value);
     };


    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        alert('A name was submitted: ' + value);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
