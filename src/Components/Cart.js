import React from 'react'

const Cart = ({ cart }) => {
    let total = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <div className="Cart">
            <p>Cart: €{total.toFixed(2)}</p>
        </div>
    )
}

export default Cart
