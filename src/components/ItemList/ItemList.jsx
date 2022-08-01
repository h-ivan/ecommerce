import Item from "../Item/Item.jsx";
import loadingImg from '../../assets/img/loading.gif';

function ItemList(props) {

    return (
        <div className="products-container">
            {
                props.loading ? <img className="m-4" width="32" height="32" src={loadingImg} alt="loading"/> :
                    props.items.map(item => {
                            return <Item key={item.id} item={item}/>;
                        }
                    )}
        </div>
    );
}

export default ItemList;