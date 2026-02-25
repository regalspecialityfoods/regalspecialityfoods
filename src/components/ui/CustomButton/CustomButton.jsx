import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = ({
  children,
  onClick = () => { },
  fullWidth,
  variant = 1,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.CustomButton} ${fullWidth ? styles.wFull : ""}
      ${styles[`v${variant}`]}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
