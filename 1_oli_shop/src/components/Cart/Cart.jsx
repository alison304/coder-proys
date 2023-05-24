import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../CartContext/CartContext'

export const Cart = () => {
    const { cart, cleanCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='link-productos'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} class>Limpiar carrito</button>
            <Link to='/checkout' className='checkout'>Checkout</Link>
        </div>
    )
}

export default Cart