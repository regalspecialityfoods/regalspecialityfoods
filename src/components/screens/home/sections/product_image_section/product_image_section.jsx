import React, { useState } from "react";

import styles from "./product_image_section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Carousel, Image } from "react-bootstrap";

const ProductImageSection = ({ page = 1 }) => {
  const products = [
    {
      id: "prod1",
    },
    {
      id: "prod2",
    },
    {
      id: "prod3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={styles.ProductImageSection}
      style={{
        backgroundImage: `url('/images/${products[activeIndex].id}/bg.png')`,
      }}
    >
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <Carousel
              interval={4000}
              pause="hover"
              controls={false}
              indicators={false}
              fade
              draggable
              onSlide={(n) => {
                setActiveIndex(n);
              }}
            >
              {products.map((prod) => {
                return (
                  <Carousel.Item key={prod.id}>
                    <Image
                      src={`/images/${prod.id}/prod.png`}
                      alt="prod"
                      fluid
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          <div className={styles.right}>
            <div className={styles.rCont}>
              <p>
                <span>It&apos;s About You</span>
                is thoughtfully crafted for everyday nourishment. Blending
                wholesome millets, cereals, pulses & milk solids with carefully
                selected herbs, each formula is designed to support different
                life stages -Toddler, Teen, Adult - through a revitalising
                millet beverage blend.
              </p>

              <div className={styles.bot}>
                <Image
                  src={`/images/${products[activeIndex].id}/arr.png`}
                  // src={`/images/prod1/arr.png`}
                  alt="product"
                  fluid
                  key={activeIndex}
                  className={styles.botImg}
                />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ProductImageSection;
