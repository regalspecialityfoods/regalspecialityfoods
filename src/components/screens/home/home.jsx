import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero_section";
import ProductImageSection from "./sections/product_image_section/product_image_section";
import ProductsSection from "./sections/products/products";
import BrandPromise from "./sections/BrandPromise/BrandPromise";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <HeroSection page={3} noImg />
      <ProductImageSection />
      <ProductsSection />
      <BrandPromise />
    </div>
  );
};

export default HomeScreen;
