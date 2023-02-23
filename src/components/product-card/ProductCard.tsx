import React from "react";
import { Col } from "rsuite";
import styles from "./product-card.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Col lg={6} xs={12}>
      <div className={styles.item}>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={300}
            width={300}
          />
          <span>{product.category}</span>
          <h5>{product.title}</h5>
          <p>{product.price} $</p>
        </Link>
      </div>
    </Col>
  );
};

export default ProductCard;



