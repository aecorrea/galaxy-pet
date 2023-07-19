import React from 'react'
import bag from './media/shop-bag.png';


const CartWidget = () => {
  return (
    <div className="cartWidget">
        <a href="#"><img src={bag} alt="cart image" className="cart heartbeat"></img></a>
        <div id="cart-items-number">3</div>
    </div>
  )
}

export default CartWidget