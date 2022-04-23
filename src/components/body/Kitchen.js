import React, { useState } from 'react';
import '../styles/Kitchen.css'

const Kitchen = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='kitchen'>
        <div className='kitchen-btn' onClick={e => setisActive(!isActive)}>
        Home and Kitchen
        </div>
        {isActive && (
            <div className='kitchen-content'>
            <div className='kitchen-item'>
              <div className='kitchen-item-shift'>
                <div className='kitchen-sub-item'>Large Appliances</div>
                <div className='kitchen-sub-items'>Air Conditioners & Cooler</div>
                <div className='kitchen-sub-items'>Fans</div>
                <div className='kitchen-sub-items'>Freezers</div>
                <div className='kitchen-sub-items'>Washers & Dryers</div>
                <div className='kitchen-sub-items'>Refrigerators</div>
                <div className='kitchen-sub-items'>Cookers & Ovens</div>
                <div className='kitchen-sub-items'>Water Dispensers</div>
                <div className='kitchen-sub-items'>Vacuum Cleaners</div>
              </div>
              <div className='kitchen-item-shift'>
                <div className='kitchen-sub-item'>Small Appliances</div>
                <div className='kitchen-sub-items'>Blender, Mixers & Juicer</div>
                <div className='kitchen-sub-items'>Hot Plate & Burner</div>
                <div className='kitchen-sub-items'>Irons & Steamer</div>
                <div className='kitchen-sub-items'>Yam Pounder</div>
                <div className='kitchen-sub-items'>Microwaves</div>
                <div className='kitchen-sub-items'>Electric Kettle</div>
              </div>
              <div className='kitchen-item-shift'>
                <div className='kitchen-sub-item'>Home Furnishing</div>
                <div className='kitchen-sub-items'>Bed & Bathroom Furnishing</div>
                <div className='kitchen-sub-items'>Curtings & Blinds</div>
                <div className='kitchen-sub-items'>Decor</div>
                <div className='kitchen-sub-items'>Light Fixture</div>
                <div className='kitchen-sub-items'>Rug & Carpet</div>
                <div className='kitchen-sub-items'>HouseKeeper & Pet Supplier</div>
              </div>
              <div className='kitchen-item-shift'>
                <div className='kitchen-sub-item'>Kitchen & Dining</div>
                <div className='kitchen-sub-items'>Bakeware & Cook</div>
                <div className='kitchen-sub-items'>Dining</div>
                <div className='kitchen-sub-items'>Kitchen Utensils</div>
                <div className='kitchen-sub-items'>Cooker Hoods & Ventilator</div>
              </div>
            </div>
            <div className='kitchen-image'><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/customcmsmenu/item/home21.png'/></div>
        </div>
        )}
    </div>
  )
}

export default Kitchen