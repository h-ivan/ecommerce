import './CartForm.scss';
import {useEffect, useState} from "react";
import {useCart} from "../../context/CartContext.jsx";
import {collection, getFirestore, addDoc} from "firebase/firestore";

function CartForm() {

    const [orderButton, setOrderButton] = useState(true);

    const [nameInput, setNameInput] = useState(0);
    const [lastNameInput, setLastNameInput] = useState(0);
    const [phoneInput, setPhoneInput] = useState(0);
    const [emailInput, setEmailInput] = useState(0);
    const [emailInputVerify, setEmailInputVerify] = useState(0);

    const {cart, getTotalPrice, setOrderGenerated, setOrderMessage, emptyCart} = useCart();

    useEffect(() => {

        if (nameInput.length > 0 && lastNameInput.length > 0 && phoneInput.length > 0 && emailInput.length > 0 && emailInputVerify.length > 0 && (emailInput === emailInputVerify)) {
            setOrderButton(false);
        } else {
            setOrderButton(true);
        }

    }, [nameInput, phoneInput, emailInput, emailInputVerify]);

    const handleChangeName = (e) => {
        setNameInput(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastNameInput(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhoneInput(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmailInput(e.target.value);
    };

    const handleChangeEmailVerify = (e) => {
        setEmailInputVerify(e.target.value);
    };

    const placeOrder = () => {

        const cartItems = cart.map(item => {
            return {
                id: item.id,
                qty: item.qty,
                price: item.price,
                title: item.name,
            };
        });

        const order = {
            buyer:
                {
                    name: nameInput,
                    lastName: lastNameInput,
                    phone: phoneInput,
                    email: emailInput
                },
            items: cartItems,
            date: new Date().toLocaleString(),
            total: getTotalPrice()
        };

        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(r => {
                setOrderGenerated(true);
                setOrderMessage(`Order generated with id: ${r.id} - Date: ${order.date}`);
                emptyCart();
            }
        );
    };


    return (
        <div className="max-w-2xl mx-auto">

            <label htmlFor="name">Name</label>
            <input onChange={handleChangeName} id="name" className="form-input" type="text"/>

            <label htmlFor="name">Last Name</label>
            <input onChange={handleChangeLastName} id="name" className="form-input" type="text"/>

            <label htmlFor="phone">Phone</label>
            <input onChange={handleChangePhone} id="phone" className="form-input" type="text"/>

            <label htmlFor="email">Email</label>
            <input onChange={handleChangeEmail} id="email" className="form-input" type="email"/>

            <label htmlFor="email">Re enter Email</label>
            <input onChange={handleChangeEmailVerify} id="email" className="form-input" type="email"/>

            <button onClick={placeOrder} disabled={orderButton} className="order-button">Place Order</button>


        </div>
    );
}

export default CartForm;