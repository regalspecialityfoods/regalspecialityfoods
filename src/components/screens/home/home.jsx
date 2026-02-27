import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero_section";
import ProductImageSection from "./sections/product_image_section/product_image_section";
import ProductsSection from "./sections/products/products";
import BrandPromise from "./sections/BrandPromise/BrandPromise";
import PackshotSection from "./sections/packshot_section/packshot_section";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>

      <PackshotSection />
      {/* <ProductImageSection /> */}
      <HeroSection page={3} noImg />
      <ProductsSection />
      <BrandPromise />
    </div>
  );
};

export default HomeScreen;
