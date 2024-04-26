import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext'
function Header() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((total, current) => {
    return total + current.quantity
  }, 0)

  function handleShowCart() {
    userProgressCtx.showCart()
  }
  
  return (
    <header id='main-header'>
      <div id="title">
        <img src={logoImg} />
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart} className={''}> Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}

export default Header