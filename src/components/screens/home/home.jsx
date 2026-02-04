import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero_section";
import ProductImageSection from "./sections/product_image_section/product_image_section";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <HeroSection page={1} />
      <HeroSection page={2} />
      {/* <HeroSection page={3} /> */}
      <ProductImageSection page={1} />
      <ProductImageSection page={2} />
      <ProductImageSection page={3} />
    </div>
  );
};

export default HomeScreen;
