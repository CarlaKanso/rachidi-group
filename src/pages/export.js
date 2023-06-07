import Proforma from "@/components/Proforma/Proforma";
import PublicLayout from "@/components/layout/PublicLayout";
import { withAuth } from "@/hooks/routes";

function Export() {
  return (
    <PublicLayout>
      <Proforma proforma_type="export" />
    </PublicLayout>
  );
}

export default withAuth(Export)
