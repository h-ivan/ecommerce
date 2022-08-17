import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList.jsx";
import {useEffect, useState} from "react";
// import {getItems} from "../../../mock/promise.js";
import {getAllItems, getItemsByCategory} from "../../db/firestore.js";
import {useParams} from "react-router-dom";
import {getFirestore} from "firebase/firestore/lite";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [loading, isLoading] = useState(true);
    const {category} = useParams();
    const db = getFirestore();

    useEffect(() => {
            if (!category) {
                getAllItems(db).then(item => {
                    setItems(item)
                })
            } else {
                getItemsByCategory(db, category).then(item => {
                    setItems(item)
                })
            }
            isLoading(false);

    }, [category]);


    return (
        <div className="products-container">
            <ItemList onAdd={props.onAdd} items={items} loading={loading}/>
        </div>
    );
}

export default ItemListContainer;