import { createContext, useState, useContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const addItem = (item, quantity) => {
        const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

        if (!itemInCart) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            setCart((prev) =>
                prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                )
            );
        }
    };

    const removeItem = (itemId) => {
        setCart((prev) => prev.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => cart.some((item) => item.id === itemId);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
