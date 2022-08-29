import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getItemById} from "../../db/firestore.js";
import {getFirestore} from "firebase/firestore/lite";


function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const [loading, isLoading] = useState(true);
    const {id} = useParams();
    const db = getFirestore();

    useEffect(() => {
        getItemById(db, id)
            .then((result) => {
                setItem(result[0]);
                isLoading(false);
            });

    }, [id]);

    return (
        <div className="products-container">
            {item ?
                <ItemDetail item={item} loading={loading}/>
                :
                <div className='text-center'>
                    <div className='my-4 text-xl'>Item not found</div>
                    <Link className='underline hover:opacity-70' to={'/'}>Return to Homepage</Link>
                </div>
            }
        </div>
    );

}

export default ItemDetailContainer;