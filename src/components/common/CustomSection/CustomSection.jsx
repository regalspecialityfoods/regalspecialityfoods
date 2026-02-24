import React from "react";
import styles from "./CustomSection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const CustomSection = ({ children, className }) => {
  return (
    <section className={`${styles.CustomSection} ${className || ""}`}>
      <CustomContainer>{children}</CustomContainer>
    </section>
  );
};

export default CustomSection;
