import React from 'react';
import whatsapp from '../assets/whatsappBlanco.webp';
import instagram from '../assets/instagramBlanco.webp';
import facebook from '../assets/facebookBlanco.webp';
import pin from '../assets/pin.webp';
import email from '../assets/email.webp';
import logoAriel from '../assets/logoClaroAriel.svg'
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.foot}>
            <div className={styles.socialMedia}>
                <h4>Redes sociales</h4>
                <div className={styles.socialMediaLogos}>
                    <a href='https://api.whatsapp.com/send?phone=5491155248066&text=Hola,%20te%20escribo%20desde%20tu%20web'><img src={whatsapp} width='60' target='_blank' alt='WhatsApp Link' loading='lazy' /></a>
                    <a href='https://www.instagram.com/arielf_vallejos/'><img src={instagram} width='60' target='_blank' alt='Instagram Link' loading='lazy' /></a>
                    <a href='https://www.facebook.com/arielterapiasnaturales?mibextid=ZbWKwL4'><img src={facebook} width='60' target='_blank' alt='Facebook Link' loading='lazy' /></a>
                </div>
            </div>

            <div className={styles.footerContactMain}>
                <a href='https://www.google.com/maps/place/ARIEL+VALLEJOS+TERAPIAS+NATURALES/@-34.8318137,-58.4928572,15z/data=!4m2!3m1!1s0x0:0x33d74634b9831b4b?sa=X&ved=2ahUKEwiF0vy1yKv7AhXOvJUCHV83DSEQ_BJ6BAhOEAU' target='_blank'><img src={pin} width='30' alt='Google Maps Link' loading='lazy' />Dardo Rocha 2454 , El Jagüel </a>
                <a href='https://api.whatsapp.com/send?phone=5491155248066&text=Hola,%20te%20escribo%20desde%20tu%20web' target='_blank'><img src={whatsapp} width='30' alt='WhatsApp Link' loading='lazy' />1155248066</a>
                <a href='mailto:arielfernandovallejos2@gmail.com'><img src={email} width='30' alt='Email Link' loading='lazy' />Enviame un email</a>
            </div>
            <div>
                <img src={logoAriel} width='150' alt='Ariel Vallejos logo' loading='lazy' />
            </div>

        </footer>
    )
}

export default Footer