import './ItemListContainer.scss';

function ItemListContainer(props) {
    return (
        <div className="product-item">
            <input className="product-qty" type="number" defaultValue={props.quantity}/>
            <p>
                {props.greeting}
            </p>
        </div>
    );
}

export default ItemListContainer;