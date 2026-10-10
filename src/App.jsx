import { useState, useEffect } from 'react'
import GameCard from './components/GameCard'
import games from './data/listagames'

import './App.css'

function App() {
  const [titulo ,setTitulo] = useState("")
  const [imagem ,setImagem] = useState("")
  const [plataforma ,setPlataforma] = useState("")
  const [listagames, setListagames] = useState(() => {
  const salvo = localStorage.getItem("listasalva");
  return salvo ? JSON.parse(salvo) : games;
});
  useEffect(() => {localStorage.setItem("listasalva", JSON.stringify(listagames))}, [listagames]); 
  
  
  function handleTitulo(e) {
    setTitulo(e.target.value);
  }

  function handleImagem(e) {
    setImagem(e.target.value);
  }

  function handlePlataforma(e) {
    setPlataforma(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    let x = 11
    const novalista = {
      id: x += 1, 
      titulo:  titulo,
      imagem: imagem,
      plataforma: plataforma

    }
    setListagames([...listagames, novalista])
    setTitulo(" ");
    setImagem(" ");
    setPlataforma(" ");
  }
  function deleteJogo(id){
    const aposdeletado = listagames.filter((item) => item.id !== id );
    setListagames(aposdeletado);
  }
  /*TODO: CRIAR EVENTO QUE JUNTA TODOS EM UM OBJETO */
  /*TODO: FAZER O FORMS FUNCIONAR USANDO O EVENTO ON SUBMIT; ALÉM DISSO CRIAR A FUNÇÃO DESSE EVENTO QUE SALVA OS ITENS NA LISTA ACIMA DO TODO */
  /*TODO: RENDERIZAR CADA CARD BASEADO NAS INFORMAÇOES DO USUARIO E SALVAR NO LOCAL STORAGE*/

  return (
    <>
        <span className='title'><h2>Meus Jogos</h2></span>
        <form className="forms-style" onSubmit={handleSubmit} >
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" id="titulo" value={titulo} onChange={handleTitulo} />
          <label htmlFor="imagem">Imagem:</label>
          <input type="url" id="imagem" value={imagem} onChange={handleImagem} />
          <label htmlFor="plataforma">Plataforma:</label>
          <input type="text" id="plataforma" value={plataforma} onChange={handlePlataforma} />
          <button id="submit-btn">Adicionar</button>
        </form>
        <div className="container">
          {listagames.map(jogo => <GameCard imagem={jogo.imagem} titulo={jogo.titulo} id={jogo.id}  plataforma={jogo.plataforma}  key={jogo.id } onDeletar={deleteJogo}/>) }
        </div>
        
    </>
  )
}
   
export default App
