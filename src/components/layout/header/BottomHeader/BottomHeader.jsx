import React from "react";
import styles from "./BottomHeader.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { Cart2, CartFill, Search } from "react-bootstrap-icons";
import SearchBar from "./SearchBar/SearchBar";

const BottomHeader = () => {
  return (
    <div className={styles.BottomHeader}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.empty}></div>
          <div className={styles.search}>
            <SearchBar />
          </div>
          <div className={styles.controls}>
            <CartFill />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BottomHeader;
