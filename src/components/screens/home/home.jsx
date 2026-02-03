import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero_section";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <HeroSection />
    </div>
  );
};

export default HomeScreen;
