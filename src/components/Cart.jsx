import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting'
import Button from './UI/Button'
import { UserProgressContext } from '../store/UserProgressContext'
import CartItem from './CartItem'

function Cart() {
    const userProgressCtx = useContext(UserProgressContext)
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0)

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    return (
        <Modal className='cart'
        onClose={ userProgressCtx.progress === 'cart'?handleCloseCart:null}
        open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {
                    cartCtx.items.map((item) => <CartItem key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onIncrease={() => { cartCtx.addItem(item) }}
                        onDecrease={() => { cartCtx.removeItem(item.id) }}
                    />)
                }
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {
                    cartCtx.items.length > 0 && 
                    <Button onClick={()=>userProgressCtx.showCheckout()}>Go to Checkout</Button>
                }
            </p>
        </Modal>
    )
}

export default Cart