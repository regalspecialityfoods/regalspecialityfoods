import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = ({
  children,
  onClick = () => {},
  fullWidth,
  variant = 1,
}) => {
  return (
    <button
      className={`${styles.CustomButton} ${fullWidth ? styles.wFull : ""}
      ${styles[`v${variant}`]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
