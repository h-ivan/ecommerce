import {useCart} from "../../context/CartContext.jsx";

function CartTotal(){
    const {getTotalPrice} = useCart();
    return (
        <div className="text-center text-xl mt-4">Total: ${parseInt(getTotalPrice()).toFixed(2)}</div>
    )
}

export default CartTotal;