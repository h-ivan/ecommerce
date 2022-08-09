import {useCart} from "../../context/CartContext.jsx";

function Cart() {
    const {cart} = useCart()
    return(
        <div className="text-center mt-4">
            Checkout page:
            {JSON.stringify(cart)}
        </div>
    )
}

export default Cart