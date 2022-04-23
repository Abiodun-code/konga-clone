import React from 'react';
import '../styles/Categories.css'
import AllCategory from './AllCategory';
import Computer from './Computer';
import Phones from './Phones';
import Electronic from './Electronic';
import Fashion from './Fashion';
import Kitchen from './Kitchen';
import Toys from './Toys';
import Other from './Other';

const Categories = () => {
  return (
    <div className='categories'>
        <div className='categories-shift'>
            <AllCategory/>
            <Computer/>
            <Phones/>
            <Electronic/>
            <Fashion/>
            <Kitchen/>
            <Toys/>
            <Other/>
        </div>
    </div>
  )
}

export default Categories