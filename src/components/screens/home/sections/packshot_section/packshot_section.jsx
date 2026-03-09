import React, { useState } from "react";
import styles from "./packshot_section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Carousel, Image } from "react-bootstrap";

const PackshotSection = () => {
  const products = [
    {
      id: "juniors",
      bgColor: "#f1ccff",
    },
    {
      id: "womens",
      bgColor: "#f8eddf",
    },
    {
      id: "men",
      bgColor: "#f9e0df",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel
      pause={false}
      interval={5000}
      fade
      onSlide={(index) => setCurrentIndex(index)}
      indicators={false}
      controls={false}
    >
      {products.map((prod) => {
        return (
          <Carousel.Item key={prod.id}>
            <section
              className={styles.PackshotSection}
              style={{
                backgroundColor: prod.bgColor,
              }}
              key={currentIndex}
            >
              <CustomContainer>
                <div className={styles.packshotWrap}>
                  <div
                    data-aos="fade-right"
                    // data-aos-delay='250'
                  >
                    <Image
                      src={`/images/products/${prod.id}/prod1.png`}
                      fluid
                      alt="juniors1"
                      className={styles.prod}
                    />
                  </div>

                  <div className={styles.mid}>
                    {/* <Image src={`/images/products/${prod.id}/about.png`} fluid
                                                alt="its about you-junior-01"
                                                data-aos='fade-down'
                                                data-aos-delay='450'
                                                className={styles.about}

                                            /> */}
                    <Image
                      src={`/images/products/${prod.id}/wellness.png`}
                      fluid
                      alt="wellness unit-junior-01"
                      data-aos="fade-up"
                      data-aos-delay="450"
                    />
                  </div>

                  <div data-aos="fade-left" data-aos-delay="300">
                    <Image
                      src={`/images/products/${prod.id}/prod2.png`}
                      fluid
                      alt="juniors2"
                      className={styles.prod}
                    />
                  </div>
                </div>
              </CustomContainer>
            </section>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PackshotSection;
