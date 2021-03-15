import React from 'react'
import Cart from './Cart'
import { CartModal } from './Modal'

const Header = ({ cart }) => {
    return (
        <div className='Header'>
            <p id='header-title'>Peloton</p>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <Cart cart={cart} /><CartModal cart={cart} />
            </div>
        </div>
    )
}

export default Header
