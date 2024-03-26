import Cabecalho from "./header";
import Beneficio from "./partes/Beneficios";
import Sessao from "./sessao";
import Recomendacao from "./partes/recomendacao"



function App() {
  

  return (
    <body className="body">
      <Cabecalho/>
      <main>
        <Sessao/>
        <Beneficio />
        <Recomendacao />
      </main>
      <footer>
        
      </footer>
      
       
    </body>
  )
}

export default App
