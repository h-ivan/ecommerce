import {ReactComponent as RemoveIcon} from '../../assets/img/x-circle.svg';
import './CartItem.scss';
import {useCart} from "../../context/CartContext.jsx";

function CartItem(props) {
    const {removeFromCart} = useCart();
    return (
        <div className="checkout-card">
            <RemoveIcon className="checkout-card-remove" onClick={() => removeFromCart(props.item.id)}/>
            <div>
                <img className="w-24" src={props.item.img} alt=""/>
            </div>
            <div className="mt-3">
                <div className="mb-2">
                    <span>{props.item.name}</span>
                </div>
                <div className="flex">
                    <div>
                        <span>{props.item.qty}</span>
                        <span className="mx-2 font-bold">x</span>
                    </div>
                    <div>
                        <span>${parseInt(props.item.price).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;