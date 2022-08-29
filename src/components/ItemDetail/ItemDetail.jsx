import ItemCount from "../ItemCount/ItemCount.jsx";
import './ItemDetail.scss';
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useCart} from "../../context/CartContext.jsx";
import loadingImg from '../../assets/img/loading.gif';

function ItemDetail(props) {

    const [cartItems, setCartItems]  = useState(0);
    const {addToCart, cart} = useCart()

    function onAdd(qty) {
        setCartItems(qty);
        addToCart({
            id: props.item.id,
            qty: qty,
            name: props.item.name,
            price: props.item.price,
            img: props.item.imageUrl
        });
    }

    return (

        <div className="product-card-detail">
            {props.loading ? <img className="mx-auto" width="32" height="32" src={loadingImg} alt="loading"/> :<div>
                <div className="flex justify-center">
                    <img src={props.item.imageUrl} alt={props.item.name}/>
                </div>
                <div className="product-card-info">
                    <div className="product-card-name">{props.item.name}</div>
                    <div className="product-card-price">${parseInt(props.item.price).toFixed(2)}</div>
                    <div className="product-card-description">{props.item.description}</div>
                </div>
            </div>}
            {cartItems === 0 ?
                <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd}/>
            :
                <NavLink className='underline hover:opacity-70' to={'/cart'}>Checkout</NavLink>
            }
        </div>
    );
}

export default ItemDetail;