
import styles from "../styles.module.css"
import fotodeperfil from "../assets/jon.jpeg"





function Profile() {
  const nome = "Inácio Fontes"

  return (
    <>
    <div className ={styles.container}>
      <div className ={styles.foto}>
        <img src={fotodeperfil} alt="Jon Snow with his direwolf named Ghost" />
        <div className ={styles.name}>
          <h1>{nome}</h1>
        </div>
        <div className={styles.info}>
        <div className={styles.section}>
        <p>Estudante no IFSP/BRA</p>
      </div>

      <div className={styles.section}>
        <p>fontes.b@aluno.ifsp.edu.br</p>
      </div>

      <div className={styles.section}>
        <p>Fã da professora Ana Paula Giancoli</p>
      </div>
    </div>             
      </div>
    </div>
    
    </>
  )
}

export default Profile