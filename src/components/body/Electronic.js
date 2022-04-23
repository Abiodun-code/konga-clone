import React, { useState } from 'react';
import '../styles/Electronic.css'

const Electronic = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='electronic'>
        <div className='electronic-btn' onClick={e => setisActive(!isActive)}>
        Electronic
        </div>
        {isActive && (
            <div className='electronic-content'>
            <div className='electronic-item'>
            <div className='electronic-item-shift'>
                <div className='electronic-sub-item'>Televisions</div>
                <div className='electronic-sub-items'>Smart TVs</div>
                <div className='electronic-sub-items'>LED TVs</div>
                <div className='electronic-sub-items'>Curved TVs</div>
                <div className='electronic-sub-items'>OLED TVs</div>
                <div className='electronic-sub-items'>Plasma TVs</div>
              </div>
              <div className='electronic-item-shift'>
                <div className='electronic-sub-item'>DVD Player</div>
                <div className='electronic-sub-items'>DVD Player</div>
                <div className='electronic-sub-items'>DVD Recorder</div>
              </div>
              <div className='electronic-item-shift'>
                <div className='electronic-sub-item'>Accessories</div>
                <div className='electronic-sub-items'>TV audio</div>
                <div className='electronic-sub-items'>HeadPhones</div>
                <div className='electronic-sub-items'>Television Accessories</div>
                <div className='electronic-sub-items'>Other Accessories</div>
                <div className='electronic-sub-items'>Gaming   Accessories</div>
              </div>
              <div className='electronic-item-shift'>
                <div className='electronic-sub-item'>Cameras</div>
                <div className='electronic-sub-items'>Digital Cameras</div>
                <div className='electronic-sub-items'>Professional & SLR Cameras</div>
                <div className='electronic-sub-items'>Camcorder & Video Cameras</div>
                <div className='electronic-sub-items'>Cameras Lenses & Accessories</div>
                <div className='electronic-sub-items'>CCTV Cameras</div>
              </div>
            </div>
            <div className='electronic-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/Electronics21.png' /></div>
        </div>
        )}
    </div>
  )
}

export default Electronic