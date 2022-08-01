import ItemCount from "../ItemCount/ItemCount.jsx";
import './ItemDetail.scss';

function ItemDetail(props) {

    function onAdd(qty) {
        console.log(`${qty} item(s) added`);
    }

    return (
        <div className="product-card-detail">
            <div className="flex justify-center">
                <img src={`../${props.item.imageUrl}`} alt={props.item.name}/>
            </div>
            <div className="product-card-info">
                <div className="product-card-name">{props.item.name}</div>
                <div className="product-card-price">${parseInt(props.item.price).toFixed(2)}</div>
            </div>
            <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemDetail;