import './ItemCount.scss';
import {useState} from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    const addItem = () => {
        setCount(count + 1);
    };

    const subItem = () => {
        setCount(count - 1);
    };

    return (
        <div className="product-card">
            <div className="h-10">
                <p>Product Name</p>
            </div>
            <div>
                <div className="counter-container">
                    <button disabled={count <= 1} onClick={subItem} className="counter-button">-</button>
                    <p className="counter-label">
                        {count}
                    </p>
                    <button disabled={count >= stock} onClick={addItem} className="counter-button">+</button>
                </div>
                <button disabled={stock === 0} onClick={() => {
                    onAdd(count);
                }} className="counter-button w-full">Add to cart
                </button>
            </div>
        </div>
    );
}

export default ItemCount;