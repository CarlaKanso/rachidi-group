import Proforma from "@/components/Proforma/Proforma";
import PublicLayout from "@/components/layout/PublicLayout";
import { withAuth } from "@/hooks/routes";

function wholesale() {
  return (
    <PublicLayout>
      <Proforma proforma_type="wholesale" />
    </PublicLayout>
  );
}

export default withAuth(wholesale)
