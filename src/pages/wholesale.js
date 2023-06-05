import ProductGrid from "@/components/Proforma/ProductGrid";
import PublicLayout from "@/components/layout/PublicLayout";
import React from "react";

export default function wholesale() {
  return (
    <PublicLayout>
      <ProductGrid proforma_type="wholesale" />
    </PublicLayout>
  );
}
