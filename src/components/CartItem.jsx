import React from 'react'
import { currencyFormatter } from '../utils/formatting'

function CartItem({name,price,quantity,onIncrease,onDecrease}) {
  return (
    <li className='cart-item'>
        <p>{name} - {quantity} * {currencyFormatter.format(price)}</p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem