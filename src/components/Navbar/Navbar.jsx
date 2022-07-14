import './Navbar.scss';
import {ReactComponent as CartIcon} from '../../assets/img/cart-icon.svg';
import {ReactComponent as LoginIcon} from '../../assets/img/login-icon.svg';

function Navbar() {
    return (
        <header className="header container">
            <a href="#" className="nav-item">
                new products
            </a>
            <a href="#" className="nav-item">
                trending collections
            </a>
            <h1 className="brand-name">
                black & white
            </h1>
            <a href="#" className="nav-item">
                spring essentials
            </a>
            <a href="#" className="nav-item">
                summer sale
            </a>
            <div className="flex items-center">
                <a href="#">
                    <LoginIcon className="menu-icon"/>
                </a>
                <a href="#">
                    <CartIcon className="menu-icon"/>
                </a>
            </div>
        </header>
    );
}

export default Navbar;