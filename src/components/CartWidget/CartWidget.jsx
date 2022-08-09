import {ReactComponent as CartIcon} from '../../assets/img/cart-icon.svg';
import './CartWidget.scss';
import {useCart} from "../../context/CartContext.jsx";
import {NavLink} from "react-router-dom";

function CartWidget() {
    const {getTotalItems} = useCart();
    return (
        <div className="relative">
            <NavLink className="cart-icon-link" to={'/cart'}>
                <CartIcon className="menu-icon"/>
                <div className="cart-quantity">{getTotalItems()}</div>
            </NavLink>
        </div>
    );
}

export default CartWidget;