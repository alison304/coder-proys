import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import olishop from '../../assets/img/olishop.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <img className="title" src={olishop} alt='olishop' />
            </Link>
            <div className="Categories">
                <NavLink to={`/category/ropa`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                    Ropa
                </NavLink>
                <NavLink to={`/category/tablet`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                    Regalos
                </NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive?'ActiveOption':'Option'}>
                    Accesorios
                </NavLink>
                <CartWidget />
            </div>
        </nav>

    );
}
export default Navbar;