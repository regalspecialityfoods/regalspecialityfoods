import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("regal_cart");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from localStorage", error);
            }
        }
    }, []);

    // Persist cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("regal_cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, selectedSize) => {
        setCartItems((prevItems) => {
            // Check if item with same productId and sizeLabel already exists
            const existingItemIndex = prevItems.findIndex(
                (item) => item.productId === product.id && item.sizeLabel === selectedSize.label
            );

            if (existingItemIndex > -1) {
                const item = prevItems[existingItemIndex];
                // Check limit
                if (item.quantity >= (item.maxPerOrder || 999)) {
                    return prevItems;
                }

                // Increment quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return updatedItems;
            } else {
                // Add new row
                const newItem = {
                    id: uuidv4(),
                    productId: product.id,
                    name: product.name,
                    image: product.image,
                    sizeLabel: selectedSize.label,
                    price: selectedSize.currentPrice,
                    quantity: 1,
                    maxPerOrder: selectedSize.maxPerOrder || 5,
                };
                return [...prevItems, newItem];
            }
        });
    };

    const removeFromCart = (cartItemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
    };

    const updateQuantity = (cartItemId, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === cartItemId) {
                    if (newQuantity < 1) return item;
                    if (newQuantity > (item.maxPerOrder || 999)) return item;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const toggleCart = (state) => {
        setIsCartOpen(state !== undefined ? state : !isCartOpen);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
                isCartOpen,
                toggleCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
