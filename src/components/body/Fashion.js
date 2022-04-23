import React, { useState } from 'react';
import '../styles/Fashion.css'

const Fashion = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='fashion'>
        <div className='fashion-btn' onClick={e => setisActive(!isActive)}>
        Konga Fashion
        </div>
        {isActive && (
          <div className='fashion-content'>
            <div className='fashion-item'>
              <div className='fashion-item-shift'>
                <div className='fashion-sub-item'>Women's Wear</div>
                <div className='fashion-sub-items'>Dresses</div>
                <div className='fashion-sub-items'>Tops</div>
                <div className='fashion-sub-items'>Trousers</div>
                <div className='fashion-sub-items'>JumpSuits</div>
                <div className='fashion-sub-items'>Suits & Blazers</div>
                <div className='fashion-sub-items'>Skirts</div>
                <div className='fashion-sub-items'>Co-ordinate</div>
                <div className='fashion-sub-items'>Lingeris & sleepwear</div>
                <div className='fashion-sub-items'>Ready to Wear</div>
              </div>
              <div className='fashion-item-shift'>
                <div className='fashion-sub-item'>Women's Accessories</div>
                <div className='fashion-sub-items'>Bags</div>
                <div className='fashion-sub-items'>Belts</div>
                <div className='fashion-sub-items'>Purses</div>
                <div className='fashion-sub-items'>Wallet</div>
                <div className='fashion-sub-items'>Jewellery</div>
                <div className='fashion-sub-items'>Hats & Scarves</div>
              </div>
              <div className='fashion-item-shift'>
                <div className='fashion-sub-item'>Men's Wear</div>
                <div className='fashion-sub-items'>Shirts</div>
                <div className='fashion-sub-items'>T-Shirts</div>
                <div className='fashion-sub-items'>Polo</div>
                <div className='fashion-sub-items'>Jeans</div>
                <div className='fashion-sub-items'>Trousers & Shorts</div>
                <div className='fashion-sub-items'>Pyjamas</div>
                <div className='fashion-sub-items'>Traditionals Wear</div>
                <div className='fashion-sub-items'>Suits, Blazers & Jacket</div>
                <div className='fashion-sub-items'>Jersey</div>
              </div>
              <div className='fashion-item-shift'>
                <div className='fashion-sub-item'>Men's Accessories</div>
                <div className='fashion-sub-items'>Jewellery</div>
                <div className='fashion-sub-items'>Belts</div>
                <div className='fashion-sub-items'>Underwear</div>
                <div className='fashion-sub-items'>Wallet</div>
                <div className='fashion-sub-items'>Watches</div>
                <div className='fashion-sub-items'>Caps</div>
              </div>
            </div>
            <div className='fashion-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/fashion21.png'/></div>
        </div>
        )}
    </div>
  )
}

export default Fashion