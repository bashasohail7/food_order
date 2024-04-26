import React, { useContext } from 'react'
import { currencyFormatter } from '../utils/formatting'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
function MealItem({meal} ) {
    // console.log('current meal ===>',meal);
    const cartCtx = useContext(CartContext)
    function handleAddMealToCart() {
        console.log('adding ... ==> ',meal);
        cartCtx.addItem(meal)
    }
    return <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart} className={''}>Add to Cart</Button>
            </p>
        </article>
    </li>
}

export default MealItem