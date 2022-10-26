import './Navbar.scss';

import {ReactComponent as LoginIcon} from '../../assets/img/login-icon.svg';
import CartWidget from "../CartWidget/CartWidget.jsx";
import {NavLink} from "react-router-dom";
import {useCart} from "../../context/CartContext.jsx";

function Navbar() {
    const {cart} = useCart()
    return (
        <header className="header container">
            <NavLink className={({isActive}) =>
                isActive ? 'underline nav-link' : 'nav-link'} to={'/category/spring'}>
                spring essentials
            </NavLink>
            <NavLink className={({isActive}) =>
                isActive ? 'underline nav-link' : 'nav-link'} to={'/category/trending'}>
                trending collections
            </NavLink>
            <NavLink className="brand-name" to={'/'}>
                <h1>
                    black & white3
                </h1>
            </NavLink>
            <NavLink className={({isActive}) =>
                isActive ? 'underline nav-link' : 'nav-link'} to={'/category/summer'}>
                summer sale
            </NavLink>
            <NavLink className={({isActive}) =>
                isActive ? 'underline nav-link' : 'nav-link'} to={'/products'}>
                all products
            </NavLink>
            <div className="flex items-center">
                <a href="#" className="cart-icon-link">
                    <LoginIcon className="menu-icon"/>
                </a>
                <CartWidget/>
            </div>
        </header>
    );
}

export default Navbar;