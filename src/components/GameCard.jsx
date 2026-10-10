import styles from './GameCard.module.css'

function GameCard(props) {
  let corBorda;

  if (props.plataforma?.toLowerCase().includes('nintendo')){
    corBorda = '#FF0000'
  }
  else if (props.plataforma?.toLowerCase().includes('playstation')) {
    corBorda = '#0000FF'
  }
  else if(props.plataforma?.toLowerCase().includes('xbox')) {
    corBorda = '#66FF00'
  }
  else {
    corBorda = '#000000'
  }
  


  return(
    <>
      <div className={styles.card}>
        <img src={props.imagem} alt={props.nome} style={{ borderColor: corBorda, boxShadow: `0 0 15px ${corBorda}` }}  />
        <h2>{props.titulo}</h2>
        <p>{props.plataforma}</p>
        <button className= {styles.btn} onClick={() => props.onDeletar(props.id)}>Deletar</button>
      </div>


    </>
  )
}


export default GameCard