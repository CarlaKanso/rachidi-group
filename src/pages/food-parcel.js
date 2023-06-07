import Proforma from "@/components/Proforma/Proforma";
import PublicLayout from "@/components/layout/PublicLayout";
import { withAuth } from "@/hooks/routes";
import React from "react";

function foodParcel() {
  return (
    <PublicLayout>
      <Proforma proforma_type="parcel" />
    </PublicLayout>
  );
}

export default withAuth(foodParcel)
