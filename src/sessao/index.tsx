import Banner from "../assets/banner1.jpg"

export default function Sessao() {
    return(
       <section>
            <div className="container">
                <h1>O Melhor lugar para encontra sua necessidade de tecnologia</h1>
                <p>
                    Loja com artigos de tecnologia que cabem no seu bolso, venha conferir
                </p>
                <a className="cta inter-uniquifier">
                    Venha Comprar
                </a>
               <div>
                    <p>social proof (quem usa o seu produto)</p>
                    
                    <ul>
                        <a href="">
                            <li>

                            </li>
                        </a>
                        <a href="">
                            <li>

                            </li>
                        </a>
                        <a href="">
                            <li>
                                
                            </li>
                        </a>
                    </ul>
               </div>
            </div>

            <img className="banner" src={Banner} width={537} height={460} alt="imagem ilustrando aparelhos eletronicos para venda" />
        </section>
        );
    };