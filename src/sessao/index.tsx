import Banner from "../assets/banner1.jpg"
import "./man.css"


export default function Sessao() {
    return(
       <section className="grade">
            <div className="painel1">
                <div className="container">
                    <h1>O Melhor lugar para encontra sua necessidade de tecnologia</h1>
                    <p>
                        Loja com artigos de tecnologia que cabem no seu bolso, venha conferir
                    </p>
                    <a className="cta inter-uniquifier">
                        Venha Comprar
                    </a>
                    <div className="social">
                        <p><strong>Clientes que aprovam nossos produtos</strong></p> 
                       <ul>
                            <Logo/>
                            <Logo/> 
                            <Logo/>     
                        </ul>
                    </div>
                </div>

                <img className="banner" src={Banner} width={537} height={460} alt="imagem ilustrando aparelhos eletronicos para venda" />
            </div>
        </section>
        );
    };

    function Logo(){
        return(
                            <a href="#logo" className="logosocial">
                                <li>
                                </li>
                            </a>
               
        );
    };