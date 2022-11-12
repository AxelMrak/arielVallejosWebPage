import React from 'react';
import styles from '../styles/Office.module.css';

function Office({ name, address, tel, telWithFormat, whatsapp }) {
  return (
    <div className={styles.officeUnitContainer}>
        <h4>{name}</h4>
        <p>{address}</p>
        <a href={`tel: ${tel}`}>{telWithFormat}</a>
        <a href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Hola,%20te%20escribo%20desde%20tu%20web`}><p>{whatsapp}</p></a>
    </div>
  )
}

export default Office