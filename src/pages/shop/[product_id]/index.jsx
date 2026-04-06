import ProductDescriptionScreen from "@/components/screens/product_description/product_description";
import React from "react";
import { getproductDetail } from "@/data/dummy_products";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {

  const router = useRouter();
  const product = getproductDetail(router?.query?.product_id);

  if (!product) return null;

  return <ProductDescriptionScreen product={product} />;
};

export default ProductDetailsPage;
