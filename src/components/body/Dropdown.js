import React, { useState } from 'react';
import '../styles/Dropdown.css'

const Dropdown = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => setisActive(!isActive)}>
            Helps
        </div>
        {isActive && (
            <div className='dropdown-content'>
            <div className='dropdown-item'>FAQs</div>
            <div className='dropdown-item'>Track My Order</div>
            <div className='dropdown-item'>Contact Us</div>
        </div>
        )}
    </div>
  )
}

export default Dropdown