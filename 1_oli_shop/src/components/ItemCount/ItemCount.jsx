import React from 'react'
import { useState } from 'react'
import './ItemCount.css';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <RemoveCircleIcon onClick={decrement} fontSize='medium' />
                <h4 className='number'>{quantity}</h4>
                <AddCircleIcon onClick={increment} fontSize='medium' />
                <AddShoppingCartIcon onClick={() => onAdd(quantity)} disabled={!stock} fontSize='large' />
            </div>
            <div>
                {/* <button className='btn-agregar' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button> */}
            </div>
        </div>
    )
}

export default ItemCount;