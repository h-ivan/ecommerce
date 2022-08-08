import './App.scss';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import {Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/products" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/category/:category" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<ItemListContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
