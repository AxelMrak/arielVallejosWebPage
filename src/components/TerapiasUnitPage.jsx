import React from 'react';
import styles from '../styles/TerapiasUnitPageStyles.module.css';

function TerapiasUnitPage({ title, section1, description1, img }) {
  return (
    <div className={styles.terapiaUnitMain}>
      <img src={img} width='300' alt={title} loading='lazy' />
      <h2>{title}</h2>
      <div className={styles.descriptionTerapia}>
        <h3>{section1}</h3>
        <p>{description1}</p>
      </div>
      <a href={`https://api.whatsapp.com/send?phone=5491155248066&text=Hola,%20te%20escribo%20por%20la%20siguiente%20terapia%20${title}`}>Solicitar</a>
    </div>
  )
}

export default TerapiasUnitPage