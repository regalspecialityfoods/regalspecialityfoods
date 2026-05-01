import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import { Image } from "react-bootstrap";
import styles from "./pageBanner.module.scss";

const PageBanner = ({ bgImage, title, smBgPosition = "center" }) => {
  return (
    <section
      className={`${styles.heroSection} ${styles[`smBgPos_${smBgPosition}`]}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35)), url('${bgImage}')`,
      }}
    >
      <CustomContainer>
        <div className={styles.heroContent}>
          <h1 data-aos="fade-up">{title}</h1>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PageBanner;
