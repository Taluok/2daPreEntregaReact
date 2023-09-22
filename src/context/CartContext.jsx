import { createContext, useState, useContext } from "react";

// Crea el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    const totalQuantity = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
            const newCart = [...cart];
            newCart[itemIndex].quantity += quantity;
            setCart(newCart);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    // Proporciona el contexto y los valores
    const contextValue = {
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// También puedes crear un custom hook para acceder al contexto fácilmente
export const useCart = () => {
    return useContext(CartContext);
};






