import React from "react";
import styles from "./shop.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image, Row, Col } from "react-bootstrap";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import { useData } from "@/context/DataContext";
import PageBanner from "@/components/common/pageBanner/pageBanner";

const ShopScreen = () => {
  const { productCategories, loading } = useData();

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className={styles.ShopScreen}>
      {/* Hero Section */}
      <PageBanner bgImage={"/images/banners/shop.webp"} title={"SHOP"} />

      {/* Product Categorization */}
      {productCategories.map((category, index) => (
        <section
          key={category.name}
          className={styles.categorySection}
          id={category.id}
        >
          <CustomContainer>
            <div className={styles.categoryHeader} data-aos="fade-up">
              <h3>{category.name}</h3>
              <div className={styles.underline}></div>
            </div>

            <Row className={styles.productRow}>
              {category.products.map((product, pIndex) => (
                <Col xs={12} md={6} lg={4} key={product.id} className="mb-5">
                  <ProductCard product={product} index={pIndex} />
                </Col>
              ))}
            </Row>
          </CustomContainer>
        </section>
      ))}
    </div>
  );
};

export default ShopScreen;
