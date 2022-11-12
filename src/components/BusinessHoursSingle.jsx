import React from 'react';
import styles from '../styles/BusinessHoursUnit.module.css'

function BusinessHoursSingle({ place, days, hours, daysTwo, hoursTwo }) {
  return (
    <div className={styles.hoursContainerUnit}>
        <h4>{place}</h4>
        <div className={styles.daysAndHours}>
            <h5>{ ` ${days} de ${hours} hs. `}</h5>
            {
                daysTwo === undefined ? null  : (<h5>{ ` ${daysTwo} de ${hoursTwo} hs. ` }</h5>)
            }
        </div>
    </div>
  )
}

export default BusinessHoursSingle;