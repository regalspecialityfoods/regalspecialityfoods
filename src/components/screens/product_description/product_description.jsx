import React, { useState } from "react";
import { Carousel, Image, Offcanvas } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import styles from "./product_description.module.scss";
import { Check2Circle, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useCart } from "@/context/CartContext";

const ProductDescriptionScreen = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const discount =
    selectedSize.originalPrice > selectedSize.currentPrice
      ? Math.round(
          ((selectedSize.originalPrice - selectedSize.currentPrice) /
            selectedSize.originalPrice) *
            100,
        )
      : 0;

  const getStockClass = () => {
    if (product.availability === "In Stock") {
      return styles.inStock;
    } else if (product.availability === "Limited Stock") {
      return styles.limitedStock;
    } else {
      return styles.outOfStock;
    }
  };

  const [currenKey, setCurrentKey] = useState(0);

  return (
    <div className={styles.ProductDescriptionScreen}>
      <Offcanvas />
      <CustomContainer>
        <div className={styles.topSection}>
          {/* LEFT IMAGE */}
          <div className={styles.imageBox}>
            <Carousel
              controls
              indicators={false}
              onSlide={(n) => setCurrentKey(n)}
              fade
              nextIcon={
                <ChevronRight color="#e02a27" size={35} />
                // <span style={{ fontSize: "50px", color: "red" }}>→</span>
              }
              className={styles["flip-carousel"]}
              prevIcon={<ChevronLeft color="#e02a27" size={35} />}
            >
              {product.images.map((img, idx) => {
                return (
                  <Carousel.Item key={`${product.name}_${idx}`}>
                    <Image
                      src={img}
                      fluid
                      alt={product.name}
                      className={styles["flip-img"]}
                      key={currenKey}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <div className={`${styles.stock} ${getStockClass()}`}>
              {product.availability}
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className={styles.infoBox}>
            <h1>{product.name}</h1>

            {/* Product Overview */}
            <p className={styles.overview}>{product.shortDescription}</p>

            {/* Key Benefits */}
            <div className={styles.sectionBlock}>
              <h4>Key Benefits</h4>
              <ul>
                {product.keyBenefits?.map((item, i) => (
                  <li key={i}>
                    <Check2Circle />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pack Sizes */}
            <div className={styles.sectionBlock}>
              <h4>Available Pack Sizes</h4>
              <div className={styles.sizeRow}>
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    className={`${styles.sizeBtn} ${
                      selectedSize.label === size.label ? styles.activeSize : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing & Availability */}
            <div className={styles.priceBox}>
              <div className={styles.priceRow}>
                <div className={styles.priceHead}>
                  {discount > 0 && (
                    <span className={styles.discount}>{discount}% OFF</span>
                  )}
                </div>
                {discount > 0 && (
                  <span className={styles.original}>
                    ₹{selectedSize.originalPrice}
                  </span>
                )}
                <h2>₹{selectedSize.currentPrice}</h2>
              </div>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className={styles.actionsRow}>
              {(() => {
                const cartItem = cartItems.find(
                  (item) =>
                    item.productId === product.id &&
                    item.sizeLabel === selectedSize.label,
                );
                const isOutOfStock = product.availability === "Out of Stock";
                const isLimitReached =
                  cartItem &&
                  cartItem.quantity >= (cartItem.maxPerOrder || 999);

                let buttonText = "Add To Cart";
                let buttonVariant = 1;
                let isDisabled = false;

                if (isOutOfStock) {
                  buttonText = "Out of Stock";
                  buttonVariant = 4;
                  isDisabled = true;
                } else if (isLimitReached) {
                  buttonText = (
                    <>
                      Limit Reached <Check2Circle size={18} />
                    </>
                  );
                  buttonVariant = 4;
                  isDisabled = true;
                } else if (cartItem) {
                  buttonText = (
                    <>
                      Added To Cart <Check2Circle size={18} />
                    </>
                  );
                  buttonVariant = 3;
                  isDisabled = true;
                }

                return (
                  <CustomButton
                    fullWidth
                    disabled={isDisabled}
                    variant={buttonVariant}
                    onClick={() => addToCart(product, selectedSize)}
                  >
                    {buttonText}
                  </CustomButton>
                );
              })()}
            </div>
          </div>
        </div>

        {/* INGREDIENTS & NUTRITION */}
        <div className={styles.bottomSection}>
          <div className={`${styles.sectionBlock} ${styles.detailsCard}`}>
            <h3>Ingredient Highlights</h3>
            <p>{product.ingredients}</p>
          </div>

          <div className={`${styles.sectionBlock} ${styles.detailsCard}`}>
            <h3>Nutritional Highlights</h3>
            <ul>
              {product.nutritionalHighlights?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Preparation Instructions */}
          <div
            className={`${styles.sectionBlock} ${styles.detailsCard} ${styles.fullWidth}`}
          >
            <h3>Preparation Instructions</h3>
            <div className={styles.preparation}>
              <div>
                <h5>Hot Preparation</h5>
                <p>{product.preparation.hot}</p>
              </div>
              <div>
                <h5>Cold Preparation</h5>
                <p>{product.preparation.cold}</p>
              </div>
            </div>
          </div>

          {/* Reviews Placeholder */}
          <div
            className={`${styles.sectionBlock} ${styles.detailsCard} ${styles.fullWidth}`}
          >
            <h3>Customer Reviews & Testimonials</h3>
            <div className={styles.reviewPlaceholder}>
              Reviews coming soon. Be the first to share your experience.
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ProductDescriptionScreen;
