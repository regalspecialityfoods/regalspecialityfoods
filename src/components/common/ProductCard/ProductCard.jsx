import React from "react";
import styles from "./ProductCard.module.scss";
import { Image } from "react-bootstrap";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const ProductCard = ({ index }) => {
  return (
    <div
      className={styles.ProductCard}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      // data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
    >
      <div
        style={{
          backgroundColor: "#e6cee5",
        }}
        className={styles.img}
      >
        <Image src="/images/prod1/prod.png" fluid alt="product" />
      </div>
      <div className={styles.details}>
        <h4>Product Name</h4>
        <div className={styles.stars}>
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarHalf />
        </div>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, harum!
        </p>

        <div className={styles.price}>
          <div className={styles.off}>10% off</div>
          <p>₹200</p>
          <h3>₹150</h3>
        </div>

        <CustomButton fullWidth>Add To Cart</CustomButton>
      </div>
    </div>
  );
};

export default ProductCard;
