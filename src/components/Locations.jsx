import React from 'react';
import styles from '../styles/LocationsSection.module.css';
import SimpleMap from './Map';



function Locations() {
  return (
    <section className={styles.locationsMainContainer}>
        <h3>Encuéntranos</h3>
         <SimpleMap/> 
    </section>
  )
}

export default Locations