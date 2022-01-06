import "../Components/Header.css"

export default function Header({title}: {title: string}){
    return(
        <header className="header">
            {title}
        </header>
    )
}