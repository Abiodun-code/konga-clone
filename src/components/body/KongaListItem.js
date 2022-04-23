import React from 'react';
import '../styles/KongaListItem.css';
import Dropdown from './Dropdown';
import Login from './Login';


const KongaListItem = () => {
  return (
    <div className='kongalistitem'>
        <div className='kongalistitem shift'>
            <img src='https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png' />
            <h5>Store Locator</h5>
            <h5>Sell on konga</h5>
            <form>
                <input type='text' placeholder='Search for products, brands and categories....' />
                <input type='button' value='seach' />
            </form>
            <Dropdown/>
            <Login/>
            {/* <p>Cart</p> */}
        </div>
    </div>
  )
}

export default KongaListItem