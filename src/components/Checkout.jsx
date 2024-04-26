import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting'
import Input from './UI/Input'
import Button from './UI/Button'
import { UserProgressContext } from '../store/UserProgressContext'

function Checkout() {
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0)
    const userProgressCtx = useContext(UserProgressContext)
    return (
        <Modal open={userProgressCtx.progress === 'checkout'}
            onClose={() => userProgressCtx.hideCheckout()}
        >
            <form >
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label='Full Name' type='text' id='full-name' />
                <Input label='E-Mail Address' type='email' id='email' />
                <Input label='Street ' type='text' id='street' />
                <div className="control-row">
                    <Input label="Postal Code" type='text' id='postal-code' />
                    <Input label='city' type="text" id="city" />
                    <p className='modal-actions'>
                        <Button type='button' onClick={() => userProgressCtx.hideCheckout()} textOnly>Close</Button>
                        <Button >Submit Order</Button>
                    </p>
                </div>
            </form>
        </Modal>
    )
}

export default Checkout