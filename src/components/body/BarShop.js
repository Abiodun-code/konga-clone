import React from 'react';
import '../styles/BarShop.css'

const BarShop = () => {
  return (
    <div className='barshop'>
        <div className='barshop-shift'>
          <div className='barshop-card'>
            <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577274/contentservice/bar%20shop.png_Sk-r6-eVq.png' />
          </div>
          <div className='barshop-card'>
            <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577275/contentservice/fmcg.png_rJlBpZlE9.png' />
          </div>
        </div>
    </div>
  )
}

export default BarShop