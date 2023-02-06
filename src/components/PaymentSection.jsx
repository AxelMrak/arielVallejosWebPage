import React, { useState, useEffect } from 'react';
import styles from '../styles/PaymentsSection.module.css';


function PaymentSection() {

    const [width, setWindowWidth] = useState(0);

    

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width);
    };


useEffect(() => {

        updateDimensions();
        

        window.addEventListener('resize', updateDimensions);
        

        return () =>{
            window.removeEventListener('resize', updateDimensions);
            
        }
            
    }, []);
    return (
        <div className={styles.paymentSectionContainer}>
            <h3>Medios de pago</h3>
            <div className={styles.mercadoPagoContainer}>
                <p>Puede abonar directamente desde esta página.</p>
                <a href='https://mpago.la/14cUm8N' target='_blank'>Pagar</a>
                {
                    width >= 600 ? (<img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/575X40.jpg"
                        title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"
                        width="575" height="40" loading='lazy'/>) :
                        (<img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/125X125.jpg"
                            title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"
                            width="125" height="125" loading='lazy'/>)
                }
            </div>
        </div>
    )
}

export default PaymentSection