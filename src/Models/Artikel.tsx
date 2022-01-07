interface ArtikelProps{
    //id: number;
    name: string
}

export default function Artikel(props:ArtikelProps){
    return(
        <p>
            {props.name}{/* {props.id}*/}
        </p>
    )
}