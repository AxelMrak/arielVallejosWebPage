import React from 'react';
import Map from './Map';
import styles from '../styles/LocationsSection.module.css';

function Locations() {
  return (
    <section className={styles.locationsMainContainer}>
        <h3>Encuéntranos</h3>
        <Map/>
    </section>
  )
}

export default Locations