import {useCart} from "../../context/CartContext.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {NavLink} from "react-router-dom";
import CartTotal from "../CartTotal/CartTotal.jsx";

function Cart() {
    const {cart} = useCart();
    return (
        <div className="mt-4 container mx-auto">
            {cart.length === 0 ?
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
            {cart.length > 0 && <CartTotal/>}
        </div>
    );
}

export default Cart;