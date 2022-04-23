import React, { useState } from 'react';
import '../styles/Toys.css'

const Toys = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='toys'>
        <div className='toys-btn' onClick={e => setisActive(!isActive)}>
        Baby, Kids and Toys
        </div>
        {isActive && (
              <div className='toys-content'>
              <div className='toys-item'>
                <div className='toys-item-shift'>
                  <div className='toys-sub-item'>Fashions for Girl's</div>
                  <div className='toys-sub-items'>Set</div>
                  <div className='toys-sub-items'>Dresses</div>
                  <div className='toys-sub-items'>Shoes</div>
                  <div className='toys-sub-items'>Tops & Jacket</div>
                  <div className='toys-sub-items'>Watches</div>
                  <div className='toys-sub-items'>Sleepwear</div>
                  <div className='toys-sub-items'>Bodysuit</div>
                  <div className='toys-sub-items'>Underwears & Socks</div>
                </div>
                <div className='toys-item-shift'>
                  <div className='toys-sub-item'>Fashions for Boy's</div>
                  <div className='toys-sub-items'>Set</div>
                  <div className='toys-sub-items'>Polo</div>
                  <div className='toys-sub-items'>Shoes</div>
                  <div className='toys-sub-items'>Denim & Trouser</div>
                  <div className='toys-sub-items'>Shirts</div>
                  <div className='toys-sub-items'>Sleepwear</div>
                  <div className='toys-sub-items'>Bodysuit</div>
                  <div className='toys-sub-items'>Underwears & Socks</div>
                </div>
                <div className='toys-item-shift'>
                  <div className='toys-sub-item'>Maternity</div>
                  <div className='toys-sub-items'>Maternity Tops & Jacket</div>
                  <div className='toys-sub-items'>Maternity Dresses</div>
                  <div className='toys-sub-items'>Maternity Trouser & Skirts</div>
                  <div className='toys-sub-items'>Maternity Underwears</div>
                  <div className='toys-sub-items'>Maternity Accessories</div>
                </div>
                <div className='toys-item-shift'>
                  <div className='toys-sub-item'>Kids Bedding & Decor</div>
                  <div className='toys-sub-items'>Bedding</div>
                  <div className='toys-sub-items'>Decor Accessories</div>
                  <div className='toys-sub-items'>Furnitures</div>
                </div>
              </div>
              <div className='toys-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/BKT21.png'/></div>
          </div>
        )}
    </div>
  )
}

export default Toys