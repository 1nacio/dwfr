import { useState } from 'react'
import GameCard from './components/GameCard'
import games from './data/listagames'

import './App.css'

function App() {
  

  return (
    <>
        <span className='title'><h2>Meus Jogos</h2></span>
        <div className="container">
          {games.map(jogo => <GameCard capa={jogo.capa} nome={jogo.nome} descricao={jogo.descricao} ano={jogo.ano} key={jogo.id }/>) }
        </div>
        
    </>
  )
}
   
export default App
