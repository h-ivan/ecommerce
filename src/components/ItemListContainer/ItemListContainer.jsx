import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList.jsx";


function ItemListContainer(props) {
    return (
        <div className="products-container">
            <ItemList onAdd={props.onAdd}/>
        </div>
    );
}

export default ItemListContainer;