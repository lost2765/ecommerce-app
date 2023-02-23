import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getProductById } from "../../services/product.service";
import { FlexboxGrid, Col } from "rsuite";
import Image from "next/image";
import ProductDetailComponent from "@/components/product/ProductDetailComponent";

type Props = {
  productInfo: ProductType;
};
const ProductDetailPage = ({ productInfo }: Props) => {
  return <ProductDetailComponent productInfo={productInfo} />;
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (!params && !params!.id) {
    return {
      notFound: true,
    };
  }
  const id = Number(params!.id);
  const data = await getProductById(id);
  return {
    props: {
      productInfo: data,
    },
  };
};

export default ProductDetailPage;
