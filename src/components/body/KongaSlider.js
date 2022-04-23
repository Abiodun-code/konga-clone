import React from 'react';
import Slider from './Slider';
import '../styles/KongaSlider.css'
import SliderCard from './SliderCard';

const KongaSlider = () => {
  return (
    <div className='kongaslider'>
        <Slider/>
        <SliderCard/>
    </div>
  )
}

export default KongaSlider