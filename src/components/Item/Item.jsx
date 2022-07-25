import './Item.scss'
import ItemCount from "../ItemCount/ItemCount.jsx";

function Item(props) {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={props.item.imageUrl} alt={props.item.name}/>
            </div>
            <div className="product-card-info">
                <div className="product-card-name">{props.item.name}</div>
                <div className="product-card-price">${props.item.price.toFixed(2)}</div>
            </div>
            <ItemCount stock={props.item.stock} initial={1} onAdd={props.onAdd}/>
        </div>
    )
}

export default Item