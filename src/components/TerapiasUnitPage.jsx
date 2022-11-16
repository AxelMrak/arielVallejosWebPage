import React from 'react';
import styles from '../styles/TerapiasUnitPageStyles.module.css';

function TerapiasUnitPage({ title, section1, description1, section2, description2, img }) {
  return (
    <div className={styles.terapiaUnit}>
        <img src={img} width='300'/>
        <h2>{title}</h2>
        <button>Solicitar</button>
        <div>
           <h3>{section1}</h3>
           <p>{description1}</p> 
        </div>
    </div>
  )
}

export default TerapiasUnitPage