import './App.scss';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {

    return (
        <div className="app">
            <Navbar/>
            <div className="container mx-auto">
                {/*---HERO SECTION---*/}
                <ItemListContainer quantity={1} greeting="product name"/>
            </div>

        </div>
    );
}

export default App;
