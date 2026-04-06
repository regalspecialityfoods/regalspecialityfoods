import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import { useCart } from "@/context/CartContext";
import styles from "./FloatingCartButton.module.scss";

const FloatingCartButton = () => {
    const { cartCount, toggleCart, isCartOpen } = useCart();

    if (isCartOpen) return null; // Hide button when cart is open

    return (
        <button
            className={styles.floatingCartBtn}
            onClick={() => toggleCart(true)}
            aria-label="Open Cart"
        >
            <div className={styles.iconWrapper}>
                <BagCheckFill size={24} />
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </div>
        </button>
    );
};

export default FloatingCartButton;
