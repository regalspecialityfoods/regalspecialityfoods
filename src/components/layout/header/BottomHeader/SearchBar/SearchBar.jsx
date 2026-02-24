import React from "react";
import { Search } from "react-bootstrap-icons";
import styles from "./SearchBar.module.scss";
const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <input placeholder="search" />
      <Search />
    </div>
  );
};

export default SearchBar;
