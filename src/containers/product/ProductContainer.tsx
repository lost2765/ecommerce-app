import React from "react";
import useGetProductList from "./hooks/useGetProductList";
import { FlexboxGrid, Container } from "rsuite";
import ProductCard from "@/components/product-card/ProductCard";
const ProductContainer = () => {
  const productData = useGetProductList();

  if (!productData.products) return <p>loading...</p>;

  return (
    <section>
      <Container>
        <FlexboxGrid>
          {productData.products?.map((pro) => (
            <ProductCard product={pro} key={pro.id} />
          ))}
        </FlexboxGrid>
      </Container>
    </section>
  );
};

export default ProductContainer;
