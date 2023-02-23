import Image from "next/image";
import React from "react";
import { FlexboxGrid, Col } from "rsuite";
import styles from "./product-detail.module.scss";
type Props = {
  productInfo: ProductType;
};

const ProductDetailComponent = ({ productInfo }: Props) => {
  return (
    <section className={styles.productSection}>
      <FlexboxGrid>
        <Col lg={12} xs={24}>
          <Image
            src={productInfo.thumbnail}
            height={350}
            width={400}
            alt={productInfo.title}
          />
        </Col>
        <Col lg={12} xs={24}>
          <div>
            <h3>{productInfo.title}</h3>
            <span>{productInfo.category}</span>
            <p>{productInfo.description}</p>
            <p>{productInfo.price} $</p>
          </div>
        </Col>
      </FlexboxGrid>
    </section>
  );
};

export default ProductDetailComponent;
