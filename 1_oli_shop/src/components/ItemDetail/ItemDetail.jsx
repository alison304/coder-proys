import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from "react-router-dom"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const navigate = useNavigate()

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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </footer>
    </article>
    )
}

export default ItemDetail