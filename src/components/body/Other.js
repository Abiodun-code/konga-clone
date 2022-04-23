import React, { useState } from 'react';
import '../styles/Other.css'

const Other = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='other'>
        <div className='other-btn' onClick={e => setisActive(!isActive)}>
        Other Categories
        </div>
        {isActive && (
           <div className='other-content'>
           <div className='other-item'>
             <div className='other-item-shift'>
               <div className='other-sub-item'>Beauty, Health & Personal care</div>
               <div className='other-sub-items'>Makeup</div>
               <div className='other-sub-items'>Fragrances</div>
               <div className='other-sub-items'>Health</div>
               <div className='other-sub-items'>Hair Center</div>
               <div className='other-sub-items'>Personal care</div>
               <div className='other-sub-items'>Skin care</div>
               <div className='other-sub-items'>Sexual Wellness</div>
               <div className='other-sub-items'>Contraceptive</div>
             </div>
             <div className='other-item-shift'>
               <div className='other-sub-item'>Sports & Fitness</div>
               <div className='other-sub-items'>Outdoor or Indoor game</div>
               <div className='other-sub-items'>Sportswear</div>
               <div className='other-sub-items'>Fitness</div>
               <div className='other-sub-items'>Football</div>
               <div className='other-sub-items'>Swimming</div>
               <div className='other-sub-items'>Boxing</div>
               <div className='other-sub-items'>Basketball</div>
             </div>
             <div className='other-item-shift'>
               <div className='other-sub-item'>Groceries</div>
               <div className='other-sub-items'>Food</div>
               <div className='other-sub-items'>Fronzen Food</div>
               <div className='other-sub-items'>Beverages</div>
             </div>
             <div className='other-item-shift'>
               <div className='other-sub-item'>Alcoholic Beverages</div>
               <div className='other-sub-items'>Spirit</div>
               <div className='other-sub-items'>Wine</div>
               <div className='other-sub-items'>Whiskey</div>
               <div className='other-sub-items'>Champagne</div>
               <div className='other-sub-items'>Cream</div>
             </div>
           </div>
           <div className='other-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/others21.png'/></div>
       </div>
        )}
    </div>
  )
}

export default Other