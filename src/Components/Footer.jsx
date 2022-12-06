import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const {Theme}= useContext(ContextGlobal)
  return (
    <footer style={{color:Theme.color,background:Theme.backgroundFooter}}>
      <div>
        <p>Powered by</p>
        <img src="/DH.png" alt='DH-logo' />
      </div>
      <div>
        <img src=".\public\images\ico-instagram.png" alt='instagram-logo'/>
        <img src=".\public\images\ico-facebook.png" alt='facebook-logo'/>
        <img src=".\public\images\ico-tiktok.png" alt='tiktok-logo'/>
        <img src=".\public\images\ico-whatsapp.png" alt='whatsapp-logo'/>
      </div>
    </footer>
  )
}

export default Footer