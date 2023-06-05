import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="imgBx">
        {/* eslint-disable-next-line */}
        <img src={product.imageUrl} alt={product.description + " image"} />
      </div>

      <div className="contentBx">
        <h2>{product.description}</h2>

        <Link href={"/products/" + product.code}>Buy Now</Link>
      </div>
    </div>
  );
}
