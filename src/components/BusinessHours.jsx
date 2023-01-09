import React from 'react';
import styles from '../styles/BusinessHoursSection.module.css';
import BusinessHoursSingle from './BusinessHoursSingle';

const hoursObject = [
  {
    place: 'El Jaguel',
    days: 'Martes a sábado',
    hours: '09.00 a 12.00',
    daysTwo: 'Lunes y miércoles',
    hoursTwo: '09.00 a 20.00'
  },
  {
    place: 'Ezeiza',
    days: 'Jueves',
    hours: '13.00 a 18.00'
  },
  {
    place: 'T. Suarez',
    days: 'Martes',
    hours: '13.30 a 18.00'
  },
  {
    place: 'Monte Grande',
    days: 'Viernes',
    hours: '12.00 a 16.00'
  },
  {
    place: 'Lomas de Zamora',
    days: 'Sábado',
    hours: '14.00 a 18.00'
  },
  {
    place: 'CABA',
    days: 'Miercoles',
    hours: '13.00 a 19.00'
  }
];

function BussinessHours() {
  return (
    <section className={styles.mainContainerHours}>
        <h3>Dias y horarios de atención</h3>
        <div className={styles.hoursContainer}>
            {
              hoursObject.map((hour, index) => 
                <BusinessHoursSingle key={index} place={hour.place} days={hour.days} daysTwo={hour.daysTwo} hours={hour.hours} hoursTwo={hour.hoursTwo}/>
              )
            }
        </div>
    </section>
  )
}

export default BussinessHours;