import { useState } from "react";

export function useCart() {
    const [cart, setCart ] = useState([]);

    const addItem = (item) => {
        setCount([...cart, item]);
    };

    const removItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return { cart, addItem, removItem, totalPrice};
}