import { useState } from 'react'
import GameCard from './components/GameCard'
import games from './data/listagames'

import './App.css'

function App() {
  const [titulo ,setTitulo] = useState("")
  const [imagem ,setImagem] = useState("")
  const [plataforma ,setPlataforma] = useState("")

  function handleTitulo(e) {
    setTitulo(e.target.value);
  }

  function handleImagem() {
    setImagem(e.target.value);
  }

  function handlePlataforma() {
    setPlataforma(e.target.value);
  }
  /*TODO: CRIAR EVENTO QUE JUNTA TODOS EM UM OBJETO */
  /*TODO: FAZER O FORMS FUNCIONAR USANDO O EVENTO ON SUBMIT; ALÉM DISSO CRIAR A FUNÇÃO DESSE EVENTO QUE SALVA OS ITENS NA LISTA ACIMA DO TODO */
  /*TODO: RENDERIZAR CADA CARD BASEADO NAS INFORMAÇOES DO USUARIO E SALVAR NO LOCAL STORAGE*/

  return (
    <>
        <span className='title'><h2>Meus Jogos</h2></span>
        <form className="forms-style" >
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" id="titulo" value={titulo} onclick={handleTitulo} />
          <label htmlFor="imagem">Imagem:</label>
          <input type="url" id="imagem" value={imagem} onclick={handleImagem} />
          <label htmlFor="plataforma">Plataforma:</label>
          <input type="text" id="plataforma" value={plataforma} onclick={handlePlataforma} />
          <button id="submit-btn">Adicionar</button>
        </form>
        <div className="container">
          {games.map(jogo => <GameCard capa={jogo.capa} nome={jogo.nome} descricao={jogo.descricao} ano={jogo.ano} key={jogo.id }/>) }
        </div>
        
    </>
  )
}
   
export default App
