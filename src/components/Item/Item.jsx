import './Item.scss';
import {Link} from "react-router-dom";

function Item(props) {
    return (
        <Link to={`/item/${props.item.id}`} className="product-card">
            <div className="product-card-image">
                <img src={`../${props.item.imageUrl}`} alt={props.item.name}/>
            </div>
            <div className="product-card-info">
                <div className="product-card-name">{props.item.name}</div>
                <div className="product-card-price">${props.item.price.toFixed(2)}</div>
            </div>

        </Link>
    );
}

export default Item;