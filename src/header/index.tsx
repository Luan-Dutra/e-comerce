import './header.css';

export default function Cabecalho() {
return(
    <div className="cabecalho">
        <header className="header">
            <span className="inter-uniquifier800">LOGO</span>
            <ul className="inter-uniquifier">
                <a href="#home"><li>
                    Home
                </li></a>
                <a href="#about"><li>
                    About
                </li></a>
                <a href="#princing"><li>
                    Princing
                </li></a>
                <a href="#contanct"><li>
                    Contact
                </li></a>
                <a href="#Support"><li>
                    Support
                </li></a>
            </ul>
        </header>
    </div>
    )
}