import React from 'react';
import styles from '../styles/TerapiaUnit.module.css';



function Terapia({ title, description, terapiaImg }){
  return (
    <div className={styles.containerTerapiaUnit}>
      <img src={terapiaImg} width='300' alt={`Se muestra una imagen a modo de ejemplo de la terapia llamada: ${title}`}/>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={`https://api.whatsapp.com/send?phone=5491155248066&text=Hola,%20quiero%20saber%20más%20sobre%20la%20siguiente%20terapia%20${title}`}>Quiero saber más</a>
    </div>
  )
}

export default Terapia;