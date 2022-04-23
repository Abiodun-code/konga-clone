import React, { useState } from 'react';
import '../styles/AllCategory.css'

const AllCategory = () => {
    const [isActive, setisActive] = useState(false)
  return (
    <div className='allcategory'>
        <div className='allcategory-btn' onClick={e => setisActive(!isActive)}>
            AllCategory
        </div>
        {isActive && (
            <div className='allcategory-content'>
            <div className='allcategory-item'>Computer and Accessories</div>
        </div>
        )}
    </div>
  )
}

export default AllCategory