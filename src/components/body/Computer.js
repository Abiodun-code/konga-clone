import React, { useState } from 'react';
import '../styles/Computer.css'

const Computer = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='computer'>
        <div className='computer-btn' onClick={e => setisActive(!isActive)}>
            Computers and Accessories
        </div>
        {isActive && (
            <div className='computer-content'>
            <div className='computer-item'>
              <div className='computer-item-shift'>
                <div className='computer-sub-item'>Laptops</div>
                <div className='computer-sub-items'>Mini Laptop and Notebooks</div>
                <div className='computer-sub-items'>Notebooks</div>
                <div className='computer-sub-items'>Ultrabooks</div>
                <div className='computer-sub-items'>Hybrids Pcs</div>
                <div className='computer-sub-items'>Macbooks</div>
              </div>
              <div className='computer-item-shift'>
                <div className='computer-sub-item'>Desktop and Monitors</div>
                <div className='computer-sub-items'>CPUs</div>
                <div className='computer-sub-items'>All in Ones</div>
                <div className='computer-sub-items'>Monitors</div>
                <div className='computer-sub-items'>UPS</div>
                <div className='computer-sub-items'>Servers</div>
                <div className='computer-sub-items'>Desktop bundles</div>
              </div>
              <div className='computer-item-shift'>
                <div className='computer-sub-item'>Computing Accessories</div>
                <div className='computer-sub-items'>Computer Peripherals</div>
                <div className='computer-sub-items'>Bags, cases, covers & sleeve</div>
                <div className='computer-sub-items'>Laptops & Desktop Accessories</div>
                <div className='computer-sub-items'>Storages Devices</div>
              </div>
              <div className='computer-item-shift'>
                <div className='computer-sub-item'>Printers, Scanners and Accessories</div>
                <div className='computer-sub-items'>Printers</div>
                <div className='computer-sub-items'>Scanners</div>
                <div className='computer-sub-items'>Inks, Toners & Catridges</div>
              </div>
              
            </div>
            <div className='computer-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/comp21.png'/></div>
        </div>
        )}
    </div>
  )
}

export default Computer