import React from "react";

import styles from "./product_image_section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const ProductImageSection = () => {
  return (
    <section className={styles.ProductImageSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <Image src="/images/prod.png" alt="prod" fluid />
          </div>

          <div className={styles.right} data-aos="fade-left">
            <div className={styles.rCont}>
              <p>
                <span>It&apos;s About You</span>
                is thoughtfully crafted for everyday nourishment. Blending
                wholesome millets, cereals, pulses & milk solids with carefully
                selected herbs, each formula is designed to support different
                life stages—men, women and children—through refreshing balanced
                nutrition.
              </p>
              <div className={styles.form}>FORMULATED TO SUPPORT</div>

              <div className={styles.bot}>
                <div className={styles.lt}>
                  Focus &<br />
                  learning
                </div>
                <div className={styles.rt}>
                  Gentle
                  <br />
                  nutrition
                </div>
                <div className={styles.lb}>
                  Natural
                  <br />
                  energy
                </div>
                <div className={styles.rb}>
                  Everyday
                  <br />
                  wellness
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ProductImageSection;
