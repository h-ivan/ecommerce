import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList.jsx";
import {useEffect, useState} from "react";
import {getItems} from "../../../mock/promise.js";
import {useParams} from "react-router-dom";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [loading, isLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        getItems().then(item => {
            if (!category) {
                setItems(item);
            } else {
                setItems(item.filter((product) => product.category === category));
            }
            isLoading(false);
        }).catch(err => {
                console.log(err);
            }
        );
    }, [category]);


    return (
        <div className="products-container">
            <ItemList onAdd={props.onAdd} items={items} loading={loading}/>
        </div>
    );
}

export default ItemListContainer;