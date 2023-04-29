import React from 'react'
import "./Item.css";

const Item = ({id, name, img, price, stock}) => {
    return (
    <article className='Card-item'>
        <header className='header'>
            <h2 className='item-head'>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className='item-img' />
        </picture>
        <section>
            <p className='info'>Precio: ${price}</p>
            <p className='info'>Stock disponible: {stock}</p>
        </section>
        <footer className='item-foot'>
            <Link to={`/item/${id}`} className='btn-opt'>Ver detalle</Link>
        </footer>
    </article>
    )
}

export default Item