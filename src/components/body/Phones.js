import React, { useState } from 'react';
import '../styles/Phones.css'

const Phones = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='phones'>
        <div className='phones-btn' onClick={e => setisActive(!isActive)}>
            Phones and Tablets
        </div>
        {isActive && (
            <div className='phones-content'>
            <div className='phones-item'>
            <div className='phones-item-shift'>
                <div className='phones-sub-item'>Mobile Phones</div>
                <div className='phones-sub-items'>Smart Phones</div>
                <div className='phones-sub-items'>Features Phones</div>
              </div>
              <div className='phones-item-shift'>
                <div className='phones-sub-item'>Mobile Phones Accessories</div>
                <div className='phones-sub-items'>Cables</div>
                <div className='phones-sub-items'>Cases & Covers</div>
                <div className='phones-sub-items'>Screen Protectors</div>
                <div className='phones-sub-items'>Chargers & Power Bank</div>
                <div className='phones-sub-items'>Earphones & Headset</div>
                <div className='phones-sub-items'>Smart Watchs & Bands</div>
                <div className='phones-sub-items'>Clips, Holders & Stands</div>
                <div className='phones-sub-items'>Batteries</div>
              </div>
              <div className='phones-item-shift'>
                <div className='phones-sub-item'>Tablets</div>
                <div className='phones-sub-items'>Andriods</div>
                <div className='phones-sub-items'>IOS</div>
                <div className='phones-sub-items'>Windows</div>
                <div className='phones-sub-items'>Other Os</div>
              </div>
              <div className='phones-item-shift'>
                <div className='phones-sub-item'>Tablets Accessories</div>
                <div className='phones-sub-items'>Cases & Covers</div>
                <div className='phones-sub-items'>Clips, Holders & Stands</div>
                <div className='phones-sub-items'>Other Accessories</div>
              </div>
            </div>
            <div className='phones-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/phones21.png' /></div>
        </div>
        )}
    </div>
  )
}

export default Phones