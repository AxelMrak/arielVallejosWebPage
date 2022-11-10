import React from 'react';
import styles from '../styles/TerapiaUnit.module.css';



function Terapia({ title, description, terapiaImg }){
  return (
    <div className={styles.containerTerapiaUnit}>
      <img src={terapiaImg} width='300' alt={`Se muestra una imagen a modo de ejemplo de la terapia llamada: ${title}`}/>
      <h4>{title}</h4>
      <p>{description}</p>
      <button>Quiero saber más</button>
    </div>
  )
}

export default Terapia;