import styles from './GameCard.module.css'

function GameCard(props) {
  let corBorda;

  if (props.descricao.toLowerCase().includes('nintendo')){
    corBorda = '#FF0000'
  }
  else if (props.descricao.toLowerCase().includes('playstation')) {
    corBorda = '#0000FF'
  }
  else if(props.descricao.toLowerCase().includes('xbox')) {
    corBorda = '#66FF00'
  }
  else {
    corBorda = '#000000'
  }
  


  return(
    <>
      <div className={styles.card}>
        <img src={props.capa} alt={props.nome} style={{ borderColor: corBorda, boxShadow: `0 0 15px ${corBorda}` }}  />
        <h2>{props.nome} ({props.ano})</h2>
        <p>{props.descricao}</p>
        <button className={styles.btn}>Saiba Mais</button>
      </div>


    </>
  )
}


export default GameCard