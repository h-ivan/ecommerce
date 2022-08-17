import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {initializeApp} from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBbPk21Ker-aJmuMP3vZMO8uMHTSmwd_o8",
    authDomain: "ecommerce-coderhouse-63b7d.firebaseapp.com",
    projectId: "ecommerce-coderhouse-63b7d",
    storageBucket: "ecommerce-coderhouse-63b7d.appspot.com",
    messagingSenderId: "894475660659",
    appId: "1:894475660659:web:96cb823b5b56db6f45e906"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
