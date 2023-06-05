import ProductGrid from "@/components/Proforma/ProductGrid";
import PublicLayout from "@/components/layout/PublicLayout";
import React, { useEffect } from "react";

export default function Export() {
  return (
    <PublicLayout>
      <ProductGrid proforma_type="export" />
    </PublicLayout>
  );
}
