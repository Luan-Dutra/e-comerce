import Baner from "../assets/beneficio/baner.jpg";
import Baner2 from "../assets/beneficio/baner2.jpg";
import "./partes.css";

export default function Beneficio(){
    return(
        <div className="beneficio">

            <section className="grade ">
            
                <h2 className="inter-uniquifier800">Compre e receba na velocidade da luz seu pedido</h2>
                
                <div className="conteiner-card">

                    <div className="card-beneficio">
                        <img className="icon-beneficio velocidade"></img>
                        <p className="titulo inter-uniquifier">Velocidade</p>
                        <p className="descricao inter-uniquifier">prezamos por velocidade na entrega,para que nossos clientes sejam satisfeitos</p>
                    </div>
                    <div className="card-beneficio">
                        <img className="icon-beneficio qualidade"></img>
                        <p className="titulo inter-uniquifier">Qualidade</p>
                        <p className="descricao inter-uniquifier">Compre qualquer produto com extrema qualidade para satisfação dos cliente possam ter os melhores produtos do mercado</p>
                    </div>
                    <div className="card-beneficio">
                        <img className="icon-beneficio protecao"></img>
                        <p className="titulo inter-uniquifier">Segurançã</p>
                        <p className="descricao inter-uniquifier">Ao comprar qualquer produto contamos com o sistema de pagaamento de confiação do mercado</p>
                    </div>
            
                </div>  

                <article className="artigo">
                    <div className="descricao">
                        <h3 className="inter-uniquifier">Os artigos de tecnologia que traz modernidade</h3>
                        <p className="inter-uniquifier">
                            Sua casas inteligente com produtos para todas as suas necessidade do dia a dia
                        </p>
                        <ul className="inter-uniquifier">
                            <li>smartphones de diversasa marcas</li>
                            <li>Produtos inteligentes para sua casa</li>
                            <li>perifericos para seus dispositivos</li>
                            <li>para facilitar seus estudos temos aparelho de estudo</li>
                        </ul>
                    </div>
                    <img src={Baner} alt="ilustra os produtos que facilita sua vida " className="img-beneficio" />
                </article>
                <article className="artigo">

                     <img src={Baner2} alt="ilustra os produtos que facilita sua vida " className="img-beneficio" />
                   
                    <div className="descricao">
                        <h3 className="inter-uniquifier">Temos como missão trazer para nossos clientes qualidade</h3>
                        <p className="inter-uniquifier">
                        A busca pela excelência na produção resulta em produtos de qualidade que proporcionam uma experiência superior aos consumidores. 
                        </p>
                        <ul className="inter-uniquifier">
                            <li>Durabilidade e Confiabilidade:</li>
                            <li>Satisfação do Cliente</li>
                            <li>Reputação da Marca</li>
                            <li>Sustentabilidade e Eficiência</li>
                        </ul>
                    </div>
                   
                </article>


            </section>
        </div>
    
    );
};
