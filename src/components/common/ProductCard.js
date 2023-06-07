import Link from "next/link";
import React from "react";

export default function ProductCard({ product, addToProforma, added }) {
  return (
    <div className="product-card">
      <div className="imgBx">
        {/* eslint-disable-next-line */}
        <img src={product.imageUrl} alt={product.description + " image"} />
      </div>

      <div className="contentBx">
        <h2>{product.description}</h2>

        {addToProforma != undefined
          ? <button onClick={() => addToProforma(product)}><a style={added ? { backgroundColor: "rgb(22, 163, 74)", color: "white" } : {}} className="transition-colors">{added ? "Remove from " : "Add to "}Proforma</a></button>
          : <Link href={"/products/" + product.code}>Select</Link>}
      </div>
    </div>
  );
}
