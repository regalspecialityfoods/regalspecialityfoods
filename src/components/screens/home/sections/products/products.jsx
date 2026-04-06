import CustomSection from "@/components/common/CustomSection/CustomSection";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import React from "react";
import styles from "./products.module.scss";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { ArrowRight } from "react-bootstrap-icons";
import { productCategories } from "@/data/dummy_products";

const ProductsSection = () => {
  return (
    <CustomSection className={styles.ProductsSection}>
      <SectionHeading
        head={"Our Products"}
        caption={` It’s About You is Regal’s flagship revitalising beverage blend range — thoughtfully created to support daily wellness across life stages.`}
      />

      <div className={styles.ProductsSectionCont}>
        {productCategories.map((productCategory) => (
          <div key={productCategory.name} className={styles.productCategory}>
            <h3 data-aos="fade-down">{productCategory.name}</h3>
            <Row className={styles.row}>
              {productCategory.products.map((prod, prodIndex) => (
                <Col xs={12} md={4} key={prod.id}>
                  <ProductCard product={prod} index={prodIndex} />
                  <br />
                  <br />
                </Col>
              ))}
            </Row>
            <div className={styles.btn}>
              <CustomButton variant={2} href={`/shop#${productCategory.id}`}>
                Shop Now <ArrowRight />
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </CustomSection>
  );
};

export default ProductsSection;
