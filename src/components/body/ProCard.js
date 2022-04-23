import React from 'react';
import '../styles/ProCard.css'

const ProCard = () => {
  return (
    <div className='procard'>
        <div className='procard-shift'>
            <div className='procard-card'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648469033/contentservice/home.png_Bkg4NmkXc.png' />
                <h1>HOME FURNISHINGS</h1>
                <p>Get Up To70% Off</p>
                <h5>Show Now ></h5>
            </div>
            <div className='procard-card'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648469035/contentservice/fitness.png_ry-NVmk7q.png' />
                <h1>FITNESS TOOLS & EQUIPMENTS</h1>
                <p>Get Fitness Equipment At Amazing Discounts!</p>
                <h5 className='h5'>Show Now ></h5>
            </div>
            <div className='procard-card'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648469035/contentservice/kids.png_B1ZNEQk79.png' />
                <h1>KIDS WEAR & ACCESSORIES</h1>
                <p>Get All Kiddies Products At Huge Discounts!</p>
                <h5 className='h5'>Show Now ></h5>
            </div>
            <div className='procard-card'>
                <img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648469034/contentservice/tv.png_rk-VEmJ7q.png' />
                <h1>TOP DEALS ON TELEVISIONS</h1>
                <p>Get The Tv you Want WithBargain Deals!</p>
                <h5 className='h5'>Show Now ></h5>
            </div>
        </div>
    </div>
  )
}

export default ProCard