import CustomSection from "@/components/common/CustomSection/CustomSection";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import React from "react";
import styles from "./products.module.scss";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { ArrowRight } from "react-bootstrap-icons";

const ProductsSection = () => {
  const productCategories = [
    {
      name: "For Men",
      products: [
        {
          id: "xscx",
        },
        {
          id: "xaex",
        },
        {
          id: "xsaex",
        },
      ],
    },
    {
      name: "For Women",
      products: [
        {
          id: "xqqx",
        },
        {
          id: "rrxx",
        },
        {
          id: "rrxxxxx",
        },
      ],
    },
    {
      name: "For Children",
      products: [
        {
          id: "xsrx",
        },
        {
          id: "xrgx",
        },
        {
          id: "xreegx",
        },
      ],
    },
  ];

  return (
    <CustomSection className={styles.ProductsSection}>
      <SectionHeading
        head={"Our Products"}
        caption={` The Visual Composer drag-and-drop page builder is packed with all Elated
        Themes. Setting up your website and creating pages full of stunning
        content.`}
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
              <CustomButton variant={2}>
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
