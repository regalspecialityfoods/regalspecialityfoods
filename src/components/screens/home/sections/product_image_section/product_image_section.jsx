import React from "react";

import styles from "./product_image_section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const ProductImageSection = ({ page }) => {
  return (
    <section
      className={styles.ProductImageSection}
      style={{
        backgroundImage: `url('/images/prod${page}/bg.png')`,
      }}
    >
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <Image src={`/images/prod${page}/prod.png`} alt="prod" fluid />
          </div>

          <div className={styles.right}>
            <div className={styles.rCont}>
              <p data-aos="fade-left" data-aos-delay="100">
                <span>It&apos;s About You</span>
                is thoughtfully crafted for everyday nourishment. Blending
                wholesome millets, cereals, pulses & milk solids with carefully
                selected herbs, each formula is designed to support different
                life stages -Toddler, Teen, Adult - through a revitalising
                millet beverage blend.
              </p>
              {/* <div
                className={styles.form}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                FORMULATED TO SUPPORT
              </div> */}

              <div
                className={styles.bot}
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <Image src={`/images/prod${page}/arr.png`} alt="xx" fluid />
                {/* <div className={styles.lt}>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ProductImageSection;
