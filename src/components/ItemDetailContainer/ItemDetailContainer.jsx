import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    const getOneProduct = (productId) => {
        fetch('../mock/db.json')
            .then((response) => response.json())
            .then((data) => {
                setItem(data.filter(item => item.id === parseInt(productId))[0]);
            }
        );
    }

    useEffect(() => {
        getOneProduct(id);
    }, [id]);


    return (
        <div className="products-container">
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;