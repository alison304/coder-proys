import React, { useContext } from 'react'
import CartContext from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./cartwidget.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        // <div className='icon-shop'></div>
        <Link to='/cart' className="icon-shop" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <ShoppingCartOutlinedIcon />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;