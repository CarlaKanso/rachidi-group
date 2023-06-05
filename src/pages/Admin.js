import AdminTable from "@/components/Admin/AdminTable";
import PublicLayout from "@/components/layout/PublicLayout";
import { withAdmin } from "@/hooks/routes";

function Admin() {
  return (
    <PublicLayout>
      <AdminTable />
    </PublicLayout>
  );
}

export default withAdmin(Admin);
