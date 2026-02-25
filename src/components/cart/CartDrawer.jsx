import React from "react";
import { Offcanvas, Image } from "react-bootstrap";
import { Trash, Plus, Dash, BagX } from "react-bootstrap-icons";
import { useCart } from "@/context/CartContext";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import styles from "./CartDrawer.module.scss";

const CartDrawer = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        isCartOpen,
        toggleCart,
    } = useCart();

    return (
        <Offcanvas
            show={isCartOpen}
            onHide={() => toggleCart(false)}
            placement="end"
            className={styles.cartDrawer}
        >
            <Offcanvas.Header closeButton className={styles.header}>
                <Offcanvas.Title className={styles.title}>Your Shopping Bag</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.body}>
                {cartItems.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <BagX size={80} color="#ddd" />
                        <h3>Your bag is empty</h3>
                        <p>Ready to add some regal flavor to your kitchen?</p>
                        <CustomButton onClick={() => toggleCart(false)}>Start Shopping</CustomButton>
                    </div>
                ) : (
                    <>
                        <div className={styles.itemsList}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemImage}>
                                        <Image src={item.image} fluid alt={item.name} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.itemHeader}>
                                            <h4 className={styles.itemName}>{item.name}</h4>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="Remove item"
                                            >
                                                <Trash size={18} />
                                            </button>
                                        </div>
                                        <p className={styles.itemSize}>{item.sizeLabel}</p>
                                        <div className={styles.itemFooter}>
                                            <div className={styles.qtyControls}>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                    <Dash size={20} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    disabled={item.quantity >= (item.maxPerOrder || 999)}
                                                >
                                                    <Plus size={20} />
                                                </button>
                                            </div>
                                            <p className={styles.itemPrice}>₹{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.drawerFooter}>
                            <div className={styles.subtotalRow}>
                                <span>Subtotal</span>
                                <span>₹{cartTotal}</span>
                            </div>
                            <p className={styles.shippingNote}>Shipping and taxes calculated at checkout.</p>
                            <CustomButton fullWidth variant={1}>
                                Proceed To Checkout
                            </CustomButton>
                        </div>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartDrawer;
