import Item from "../Item/Item.jsx";
import db from '../../../mock/db.json';
import {useEffect, useState} from "react";
import loadingImg from '../../assets/img/loading.gif';

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db);
        }, 2000);
    });
}

function ItemList(props) {

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
            {
                loading ? <img className="m-4" width="32" height="32" src={loadingImg} alt="loading"/> :
                    items.map(item => {
                            return <Item key={item.id} item={item} onAdd={props.onAdd}/>;
                        }
                    )}
        </div>
    );
}

export default ItemList;