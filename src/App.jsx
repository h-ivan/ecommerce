import './App.scss';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount/ItemCount.jsx";

function App() {

    function onAdd(qty) {
        console.log(`${qty} item(s) added`);
    }

    return (
        <div className="app">
            <Navbar/>
            <div className="container mx-auto">
                {/*<ItemListContainer quantity={1} greeting="product name"/>*/}
                <ItemCount stock={5} onAdd={onAdd} initial={1}/>
            </div>

        </div>
    );
}

export default App;
