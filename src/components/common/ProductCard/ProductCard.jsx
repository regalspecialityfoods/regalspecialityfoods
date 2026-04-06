import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { Image } from "react-bootstrap";
import { StarFill, StarHalf, Star, Check, Check2Circle } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ index = 0, product }) => {
  const { addToCart, cartItems } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const discountPercentage =
    selectedSize.originalPrice > selectedSize.currentPrice
      ? Math.round(
        ((selectedSize.originalPrice - selectedSize.currentPrice) /
          selectedSize.originalPrice) *
        100,
      )
      : 0;

  const cartItem = cartItems.find(item => item.productId === product.id && item.sizeLabel === selectedSize.label);
  const isAddedToCart = !!cartItem;
  const isLimitReached = cartItem && cartItem.quantity >= (cartItem.maxPerOrder || 999);

  const getButtonTextAndvariant = () => {
    if (product.availability === "Out of Stock") {
      return {
        text: "Out of Stock",
        variant: 4
      }
    }
    if (isLimitReached) {
      return {
        text: <>Limit Reached <Check2Circle size={18} /></>,
        variant: 4
      }
    }
    if (isAddedToCart) {
      return {
        text: <>Added To Cart <Check2Circle size={18} /></>,
        variant: 3
      }
    }
    return {
      text: "Add To Cart",
      variant: 1
    }
  }


  const renderStars = (rating = 4.5) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={`full-${i}`} />);
    }

    if (hasHalf) {
      stars.push(<StarHalf key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<Star key={`empty-${stars.length}`} />);
    }

    return stars;
  };

  if (!product || !product.sizes?.length) return null;

  return (
    <Link
      href={`/shop/${product?.id}`}
      className={styles.ProductCard}
      data-aos="fade-up"
      data-aos-delay={index * 120}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className={styles.badge}>{discountPercentage}% OFF</div>
      )}

      {/* Image */}
      <div className={styles.img} style={{ backgroundColor: "#f8f5f1" }}>
        <Image
          src={product.image || "/images/prod1/prod.png"}
          fluid
          alt={product.name}
        />
      </div>

      {/* Details */}
      <div className={styles.details}>
        <h4>{product.name}</h4>

        <div className={styles.stars}>{renderStars(product.rating)}</div>

        <p className={styles.desc}>{product.shortDescription}</p>

        {/* Size Selector */}
        <div className={styles.bot}>
          {/* Price */}
          <div className={styles.price}>
            {discountPercentage > 0 && (
              <p className={styles.original}>₹{selectedSize.originalPrice}</p>
            )}
            <h3>₹{selectedSize.currentPrice}</h3>
          </div>
          <div className={styles.sizeSelector}>
            {product.sizes.map((size, i) => (
              <button
                key={i}
                className={`${styles.sizeBtn} ${selectedSize.label === size.label ? styles.activeSize : ""
                  }`}
                onClick={(e) => {
                  e.preventDefault();

                  setSelectedSize(size);
                }}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        <br />
        <CustomButton
          fullWidth
          disabled={product.availability === "Out of Stock" || isLimitReached || isAddedToCart}
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, selectedSize);
          }}
          variant={getButtonTextAndvariant().variant}
        >
          {getButtonTextAndvariant().text}
        </CustomButton>
      </div>
    </Link>
  );
};

export default ProductCard;
