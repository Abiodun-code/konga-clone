import React from 'react';
import '../styles/SliderCard.css'

const SliderCard = () => {
  return (
    <div className='slidercard'>
        <div className='slidercard-shift'>
            <div className='slidercard-top'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648030993/contentservice/superapp.gif_HkYfBu_zc.gif' />
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648042205/contentservice/ACCESS.gif_SkBkZjdM9.gif' />
            </div>
            <div className='slidercard-bottom'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649433314/contentservice/pod.gif_r19koR6Xq.gif' />
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648042211/contentservice/edo-state.gif_SyYy-i_G9.gif' />
            </div>
        </div>
    </div>
  )
}

export default SliderCard