import React from 'react';
import TerapiasUnitPage from './TerapiasUnitPage';
import quiropraxia from '../assets/TerapiasImg/terapia1.webp';
import masajes from '../assets/TerapiasImg/terapia2.webp';
import homeopatia from '../assets/TerapiasImg/terapia3.webp';
import acupuntura from '../assets/TerapiasImg/terapia4.webp';
import auriculoterapia from '../assets/TerapiasImg/terapia5.webp';
import alimentacion from '../assets/TerapiasImg/terapia6.webp';
import ventosa from '../assets/TerapiasImg/terapia7.webp';
import presoterapia from '../assets/TerapiasImg/terapia8.webp';
import pendulo from '../assets/TerapiasImg/terapia9.webp';
import reiki from '../assets/TerapiasImg/terapia10.webp';
import flores from '../assets/TerapiasImg/terapia11.webp';
import styles from '../styles/TerapiasPage.module.css';

const terapiasUnit = [
    {
        title: 'Quiropraxia',
        section1: '¿Qué es la quiropraxia?',
        description1: 'Esta es una profesión muy eficaz en el campo de la salud en general. Los quiroprácticos realizamos ajustes (manipulaciones) de la columna vertebral u otras partes del cuerpo. El objetivo es corregir problemas posturales (de posturas del cuerpo), aliviar el dolor y asistir a la capacidad natural del cuerpo de curarse a si mismo. Muchos testimonios tengo con esta terapia maravillosa.',
        img: quiropraxia
    },
    {
        title: 'Masajes terapeuticos',
        section1: '¿Qué es el masaje terapéutico?',
        description1: 'Sirve para reducción del dolor y la inflamación, tensión de los músculos. Mejora de la circulación de la energía y del estado de alerta. Disminución de la frecuencia cardíaca y la presión arterial.',
        img: masajes
    },
    {
        title: 'Homeopatía',
        section1: '¿Qué es la homeopatía?',
        description1: 'La homeopatía es un método terapéutico que se basa en la ley de similitud o de los semejantes, la cual afirma que una sustancia que provoca determinados síntomas en una persona sana, en pequeñas cantidades, es capaz de curar los mismos síntomas o semejantes en una persona enferma.',
        img: homeopatia
    },
    {
        title: 'Acupuntura',
        section1: '¿Qué es la acupuntura?',
        description1: 'La acupuntura consiste en la inserción de agujas muy finas en la piel en puntos estratégicos del cuerpo. La acupuntura, un componente clave de la medicina china tradicional, se utiliza con frecuencia para tratar el dolor. Su uso es cada vez más frecuente para mejorar el bienestar general, por ejemplo, para manejar el estrés.',
        img: acupuntura
    },
    {
        title: 'Auriculoterapia',
        section1: '¿Qué es la auriculoterapia?',
        description1: 'La auriculoterapia es una técnica de medicina tradicional china que se deriva de la acupuntura, a través de la cual se estimulan puntos del pabellón externo de la oreja para diagnosticar y poder dar tratamiento a problemas de salud en otras zonas del cuerpo.',
        img: auriculoterapia
    },
    {
        title: 'Nutrición natural',
        section1: '¿Qué es la nutrición natural?',
        description1: 'Hace mucho más que solo ayudar a la persona a perder peso. Además de seguir un plan nutricional adecuado y mejorar tu salud, pueden solucionar otros problemas a partir de la alimentación para que puedas estar mejor. Obteniendo una mejor salud en general. Que tu alimento sea tu medicina.',
        img: alimentacion
    },
    {
        title: 'Ventosa',
        section1: '¿Qué es la ventosa?',
        description1: 'Es una antiguo instrumento de cirugía de forma redondeada de vidrio o de metal, que se aplica en diversos puntos de la superficie del cuerpo para atraer a ello un aflujo de los líquidos mediante el vacío que se forma por la ventosa. Muy eficaz para tratar mala circulación, estrés, contractura, mala circulación, dolores agudos, problemas de piel, etc.',
        img: ventosa
    },
    {
        title: 'Presoterapia',
        section1: '¿Qué es la presoterapia?',
        description1: 'Este tratamiento sirve para estimular y mejorar la circulación. Esto suele conllevar otros efectos positivos como la mejora de la oxigenación, el tono y la firmeza de la piel. Además gracias a que se estimula la circulación, también mejora el funcionamiento del sistema inmune. Es muy eficaz para tratamientos de varices, arañitas y retención de liquido.',
        img: presoterapia
    },
    {
        title: 'Pendulo Hebreo',
        section1: '¿Qué es el Péndulo Hebreo?',
        description1: 'Es una sanación con el uso de un péndulo como una herramienta para ayudar a transformar su cuerpo, su mente y su alma de estados inferiores a estados de salud y bienestar.',
        img: pendulo
    },
    {
        title: 'Reiki',
        section1: '¿Qué es el Reiki?',
        description1: 'Es una terapia curativa natural segura, holística, pues trata al ser humano como un todo, fácil de usar y puede tratar muchas enfermedades agudas y crónicas, tales cómo : sinusitis, rinitis, asma, cistitis, fatiga crónica, artritis ciática, insomnio, depresión, promover el bienestar espiritual , mental y físico.',
        img: reiki
    },
    {
        title: 'Flores de Bach',
        section1: '¿Qué son las Flores de Bach?',
        description1: 'Las Flores de Bach son una serie de esencias naturales utilizadas para tratar diversas situaciones emocionales, como miedos, soledad, desesperación, estrés, depresión y obsesiones.',
        img: flores
    },
]

function TerapiasContainerPage() {
    return (
        <div className={styles.terapiasPageMain}>
            <h1>Terapias</h1>
            <div className={styles.terapiasPageContainer}>
                {
                    terapiasUnit.map(terapia =>
                        <TerapiasUnitPage title={terapia.title} section1={terapia.section1} description1={terapia.description1} img={terapia.img} />
                    )
                }
            </div>
        </div>
    )
}

export default TerapiasContainerPage