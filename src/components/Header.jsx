import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'

import '../styles/components/Header.css'


const Header = () => {
  // destructuramos cart del stado
  const { state: { cart } } = useContext(AppContext)

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          PlatziConf Merch
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/Checkout'>
          <i className='fas fa-shopping-basket' />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header;