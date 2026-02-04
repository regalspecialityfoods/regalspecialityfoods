import React from "react";
import styles from "./hero_section.module.scss";
import { Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const HeroSection = ({ page, noImg }) => {
  return (
    <section
      className={styles.HeroSection}
      style={{
        backgroundImage: `url("/images/page${page}/bg.png")`,
      }}
    >
      <CustomContainer>
        <div className={styles.cont}>
          <div
            className={styles.left}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            {!noImg && (
              <Image src={`/images/page${page}/hero.png`} alt="hero" />
            )}
          </div>

          <div className={styles.right}>
            <div className={styles.bg}></div>
            <h1 data-aos="fade-left" data-aos-delay="200">
              Fueling Families
            </h1>
            <div className={styles.nat}>
              <h2 data-aos="fade-right" data-aos-delay="200">
                Naturally
              </h2>
              <p data-aos="zoom-in" data-aos-delay="200">
                At Regal Specialty Foods, we believe nutrition should work
                quietly, consistently, and personally. Our superfood-based
                beverage blends, made from millets, cereals, and herbs, are
                thoughtfully designed for men, women, and children. By combining
                traditional Indian wisdom with modern nutritional science, we
                support everyday wellness in a way that fits naturally into
                daily life.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
