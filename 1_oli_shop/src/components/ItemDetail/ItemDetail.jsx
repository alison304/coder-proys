import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1)
    }

    return (
        <article className='card-item'>
            <header className='header'>
                <h2 className='item-h'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='item-img' />
            </picture>
            <section>
                <p className='inf'>
                    Categoria: {category}
                </p>
                <p className='inf'>
                    Descripción: {description}
                </p>
                <p className='inf'>
                    Precio: ${price}
                </p>
                <button className='btn-back' onClick={onBack}>Volver</button>
                <p className='info'>Stock disponible: {stock}</p>
            </section>
            <footer className='foot'>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className='btn-option'>Terminar compra</Link>
                    ) : (
                        // <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail