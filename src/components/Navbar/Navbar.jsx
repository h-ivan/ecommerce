import './Navbar.scss';

import {ReactComponent as LoginIcon} from '../../assets/img/login-icon.svg';
import CartWidget from "../CartWidget/CartWidget.jsx";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="header container">
            <Link className="nav-link" to={'/category/spring'}>
                spring essentials
            </Link>
            <Link className="nav-link" to={'/category/trending'}>
                trending collections
            </Link>
            <Link className="brand-name" to={'/'}>
                <h1>
                    black & white
                </h1>
            </Link>
            <Link className="nav-link" to={'/products'}>
                all products
            </Link>
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