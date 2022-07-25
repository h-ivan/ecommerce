import './App.scss';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {

    function onAdd(qty) {
        console.log(`${qty} item(s) added`);
    }

    return (
        <div className="app">
            <Navbar/>
            <div className="container mx-auto">
                <ItemListContainer onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default App;
