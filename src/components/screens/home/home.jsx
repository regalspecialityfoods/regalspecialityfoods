import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero_section";
import ProductImageSection from "./sections/product_image_section/product_image_section";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <HeroSection />
      <ProductImageSection />
    </div>
  );
};

export default HomeScreen;
