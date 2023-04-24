import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Header() {
  return (
     <div className='header-container'>
        <div>
           <h2>Fake Store</h2>
        </div>
        <IconContext.Provider value={{color: '#3A4895', size: '1.8em'}}>
           <AiOutlineShoppingCart />
        </IconContext.Provider>
     </div>
  )
}

export default Header