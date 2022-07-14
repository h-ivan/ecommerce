import './Navbar.scss';
import {ReactComponent as CartIcon} from '../../assets/img/cart-icon.svg';
import {ReactComponent as LoginIcon} from '../../assets/img/login-icon.svg';

function Navbar() {
    return (
        <header className="header container">
            <h1 className="brand-name">
                black & white
            </h1>
            <a href="#">
                <LoginIcon className="menu-icon"/>
            </a>
            <a href="#">
                <CartIcon className="menu-icon"/>
            </a>
        </header>
    );
}

export default Navbar;