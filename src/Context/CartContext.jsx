import { createContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/client';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        setOrders([...orders, order]);
    };

    const confirmOrder = async () => {
        orders.forEach(async order => {
            await addDoc(collection(db, "orders"), {
                buyer:{
                name:"Manuel González Alayes", phone: "1231231231", email: "cliente@gmail.com"}, 
                order});
        })
        setOrders([])
    }

    const removeOrder = async (index) => {
        const updatedOrders = [...orders.slice(0, index), ...orders.slice(index + 1)];
        setOrders(updatedOrders);
    };

    return (
        <CartContext.Provider value={{ orders, addOrder, confirmOrder, removeOrder }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };