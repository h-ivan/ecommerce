import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList.jsx";
import {useEffect, useState} from "react";
import {getItems} from "../../../mock/promise.js";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        getItems().then(item => {
            setItems(item);
            isLoading(false);
        }).catch(err => {
                console.log(err);
            }
        );
    }, []);


    return (
        <div className="products-container">
            <ItemList onAdd={props.onAdd} items={items} loading={loading}/>
        </div>
    );
}

export default ItemListContainer;