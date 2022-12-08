import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const {Theme}= useContext(ContextGlobal)
  return (
    <footer style={{color:Theme.color,background:Theme.backgroundFooter}}>
      <div class="first">
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DHlogo' />
      </div>
      
      <div className='socials'>
        <img src="/images/ico-instagram.png" alt='instagram-logo'/>
        <img src="./images/ico-facebook.png" alt='facebook-logo'/>
        <img src="./images/ico-tiktok.png" alt='tiktok-logo'/>
        <img src="../images/ico-whatsapp.png" alt='whatsapp-logo'/>
      </div>
    </footer>
  )
}

export default Footer