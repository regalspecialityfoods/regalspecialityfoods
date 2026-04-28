import React from "react";
import styles from "./shop.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image, Row, Col } from "react-bootstrap";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import { useData } from "@/context/DataContext";

const ShopScreen = () => {
  const { productCategories, loading } = useData();

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className={styles.ShopScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageBg}>
          <Image src="/images/shop/hero.png" alt="Shop Hero" />
        </div>
        <CustomContainer>
          <div className={styles.heroContent}>
            <div className={styles.logoBox} data-aos="fade-down">
              <Image src="/images/logo.png" alt="Regal Specialty Foods" />
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100">
              SHOP
            </h2>
          </div>
        </CustomContainer>
      </section>

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
