import React from 'react';
import Office from './Office';
import styles from '../styles/Offices.module.css';
import Locations from './Locations';

const officesArray = [
    {
        name: 'Sucursal Ezeiza',
        address: '12 de Octubre 489 - Ezeiza',
        tel: '0111551131005',
        telWithFormat: '(011) 15-5113-1005',
        whatsapp: '1151131005'
    },
    {
        name: 'Sucursal T. Suarez',
        address: 'Gaddini 795 - Tristán Suarez',
        tel: '0111540824537',
        telWithFormat: '(011) 15-4082-4537',
        whatsapp: '1140824537'
    },
    {
        name: 'Sucursal Monte Grande',
        address: 'Rojas 30, local 18 - Monte Grande',
        tel: '0111533575550',
        telWithFormat: '(011) 15-3357-5550',
        whatsapp: '1133575550'
    },
    {
        name: 'Sucursal Lomas de Zamora',
        address: 'Giachino 402 - Lomas de Zamora',
        tel: '0111563732534',
        telWithFormat: '(011) 15-6373-2534',
        whatsapp: '1163732534'
    },
    {
        name: 'Sucursal CABA',
        address: 'Esmeralda 1254 - CABA',
        tel: '1157068904',
        telWithFormat: '(011) 15-7068-904',
        whatsapp: '1157068904'
    }
]

function Offices() {
  return (
    <section className={styles.officesSectionContainer}>
        {
            officesArray.map(office => 
                <Office key={office.name} name={office.name} address={office.address} tel={office.tel} telWithFormat={office.telWithFormat} whatsapp={office.whatsapp}/>
                )
        }
    </section>
  )
}

export default Offices