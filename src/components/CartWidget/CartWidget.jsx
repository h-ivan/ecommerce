import {ReactComponent as CartIcon} from '../../assets/img/cart-icon.svg';
import './CartWidget.scss';

function CartWidget() {
    return (
        <div className="relative">
            <a href="#" className="cart-icon-link">
                <CartIcon className="menu-icon"/>
                <div className="cart-quantity">1</div>
            </a>
        </div>
    );
}

export default CartWidget;