import ItemCount from "../ItemCount/ItemCount.jsx";
import './ItemDetail.scss';
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

function ItemDetail(props) {

    const [cartItems, setCartItems]  = useState(0);
    const navigate = useNavigate();

    function onAdd(qty) {
        console.log(`${qty} item(s) added`);
        setCartItems(qty);
        //COMENTAR LA SIGUIENTE LINEA PARA USAR EL LINK DE CHECKOUT EN LUGAR DEL NAVIGATE
        navigate('/cart');
    }

    return (
        <div className="product-card-detail">
            <div className="flex justify-center">
                <img src={`../${props.item.imageUrl}`} alt={props.item.name}/>
            </div>
            <div className="product-card-info">
                <div className="product-card-name">{props.item.name}</div>
                <div className="product-card-price">${parseInt(props.item.price).toFixed(2)}</div>
                <div className="product-card-description">{props.item.description}</div>
            </div>
            {cartItems === 0 ?
                <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd}/>
            :
                <NavLink className='underline hover:opacity-70' to={'/cart'}>Checkout</NavLink>
            }
        </div>
    );
}

export default ItemDetail;