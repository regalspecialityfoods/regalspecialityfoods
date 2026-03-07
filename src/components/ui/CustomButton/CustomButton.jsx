import React from "react";
import styles from "./CustomButton.module.scss";
import Link from "next/link";

const CustomButton = ({
  children,
  onClick = () => {},
  fullWidth,
  variant = 1,
  disabled = false,
  href,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          className={`${styles.CustomButton} ${fullWidth ? styles.wFull : ""}
      ${styles[`v${variant}`]}
      `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );
  }

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
