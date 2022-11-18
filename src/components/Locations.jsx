import React from 'react';
import styles from '../styles/LocationsSection.module.css';
import { MapContainer } from './Map';


function Locations() {
  return (
    <section className={styles.locationsMainContainer}>
        <h3>Encuéntranos</h3>
        <MapContainer/>
    </section>
  )
}

export default Locations