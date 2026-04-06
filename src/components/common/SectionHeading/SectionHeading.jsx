import React from "react";
import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ head, caption, className }) => {
  return (
    <div className={`${styles.SectionHeading} ${className || ""}`}>
      <h2 data-aos="fade-up">{head}</h2>
      <p data-aos="fade-in">{caption}</p>
    </div>
  );
};

export default SectionHeading;
