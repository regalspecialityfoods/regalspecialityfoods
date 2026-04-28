import ProductDescriptionScreen from "@/components/screens/product_description/product_description";
import React from "react";
import { useRouter } from "next/router";
import { useData } from "@/context/DataContext";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { getproductDetail, loading } = useData();
  const product = getproductDetail(router?.query?.product_id);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return <ProductDescriptionScreen product={product} />;
};

export default ProductDetailsPage;
