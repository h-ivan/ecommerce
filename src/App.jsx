import './App.scss';
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {

    return (
        <div className="app">
            <Navbar/>
            <h2 className="text-center">
                hero section
            </h2>
            <a className="text-center block" href="https://www.figma.com/file/hvOVFRLQzaG36XL6B69tru/Ecommerce-Coderhouse">Link
                to figma design</a>
        </div>
    );
}

export default App;
