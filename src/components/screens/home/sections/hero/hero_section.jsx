import React from "react";
import styles from "./hero_section.module.scss";

const HeroSection = () => {
  return (
    <section
      className={styles.HeroSection}
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className={styles.cont}>
        <div />

        <div className={styles.right}>
          <div className={styles.bg}></div>
          <h1 data-aos="fade-left" data-aos-delay="200">
            Fueling Famlies
          </h1>
          <div className={styles.nat}>
            <h2 data-aos="fade-right" data-aos-delay="200">
              Naturally
            </h2>
            <p data-aos="zoom-in" data-aos-delay="200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ipsum maxime quam. Ad, maxime praesentium veritatis neque commodi
              omnis deserunt! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nobis ipsum maxime quam. Ad, maxime praesentium
              veritatis neque commodi omnis deserunt!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
