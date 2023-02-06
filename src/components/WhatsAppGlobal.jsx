import React from 'react';
import logo from '../assets/WhatsAppGlobalIco.png';

function WhatsAppGlobal() {
  return (
    <div className='whatsapp-global-container'>
          <a href='https://api.whatsapp.com/send?phone=5491155248066&text=Hola,%20te%20escribo%20desde%20tu%20web'>
                <img src={logo} width='85' alt='WhatsApp Link' loading='lazy'/>
          </a>
    </div>
  )
}

export default WhatsAppGlobal