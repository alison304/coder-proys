import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./cartwidget.css";

const CartWidget = () => {
    return (
    <div className='icon-shop'>
        <ShoppingCartOutlinedIcon />
        0
    </div>
    )
}

export default CartWidget;