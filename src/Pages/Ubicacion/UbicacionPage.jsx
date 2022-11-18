import React from 'react';
import Locations from '../../components/Locations';
import Offices from '../../components/Offices';
import styles from '../../styles/LocationsPage.module.css';

function UbicacionPage() {
  return (
    <div className={styles.locationsPageContainer}>
        <Offices/>
        <Locations/>
    </div>
  )
}

export default UbicacionPage