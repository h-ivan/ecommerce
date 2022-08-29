import {useCart} from "../../context/CartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {NavLink} from "react-router-dom";
import CartTotal from "../CartTotal/CartTotal.jsx";
import './Cart.scss';
import CartForm from "../CartForm/CartForm.jsx";
import {useEffect} from "react";

function Cart() {
    const {cart, emptyCart, orderGenerated, orderMessage, setOrderGenerated} = useCart();

    useEffect(() => {
        return () => {
            setOrderGenerated(false);
        }
    } ,[]);

    return (
        <div className="mt-8 container mx-auto px-4">
            {cart.length > 0 && <div onClick={emptyCart} className="empty-cart">Empty Cart</div>}
            {cart.length === 0 && !orderGenerated ?
                <div className="text-center">
                    <span className="block text-xl mb-4">
                        Cart is empty
                    </span>
                    <NavLink className="underline opacity-70" to={'/'}>Shop</NavLink>
                </div>
                :
                cart.map(item => {
                        return (
                            <CartItem key={item.id} item={item}/>
                        );
                    }
                )
            }
            {cart.length > 0 &&
                <>
                    <CartTotal/>
                    <CartForm/>
                </>
            }
            {
                orderGenerated && <div className='text-center'>{orderMessage}</div>
            }
        </div>
    );
}

export default Cart;