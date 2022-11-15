import React from 'react';
import TerapiasUnitPage from './TerapiasUnitPage';

const terapiasUnit = [
    {
        title: 'Quiropraxia',
        section1: '¿Qué es la quiropraxia?',
        description1: 'Esta es una profesión muy eficaz en el campo de la salud en general. Los quiroprácticos realizamos ajustes (manipulaciones) de la columna vertebral u otras partes del cuerpo. El objetivo es corregir problemas posturales (de posturas del cuerpo),aliviar el dolor y asistir a la capacidad natural del cuerpo de curarse a si mismo. Muchos testimonios tengo con esta terapia maravillosa.',
        img: 'https://pro.institutoidip.com/storage/cursos/B5xv0lwRBf0LQdmnACBEKDjgaKO9XXeztXOwdTPk.webp'
    },
    {
        title: 'Masajes terapeuticos',
        section1: '¿Qué es el masaje terapéutico?',
        description1: 'Sirve para reducción del dolor y la inflamación, tensión de los músculos. Mejora de la circulación de la energía y del estado de alerta. Disminución de la frecuencia cardíaca y la presión arterial.',
        img: 'https://promedicas.mx/lapaz/wp-content/uploads/2020/10/masaje-terapeutico.jpg'
    },
]

function TerapiasContainerPage() {
  return (
    <div>
        {
            terapiasUnit.map(terapia => 
                <TerapiasUnitPage title={terapia.title} section1={terapia.section1} description1={terapia.description1} img={terapia.img}/>    
            )
        }
    </div>
  )
}

export default TerapiasContainerPage