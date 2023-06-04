import AdminTable from "@/components/Admin/AdminTable";
import ProductModal from "@/components/Admin/ProductModal";
import ProductCard from "@/components/common/ProductCard";
import PublicLayout from "@/components/layout/PublicLayout";
import { db } from "@/firebase/firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Admin() {

  const [showModal, setShowModal] = useState(false)

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const snapShot = await getDocs(collection(db, 'products'))
      setProducts(snapShot.docs)
    }
    getProducts()
  }, [])


  return (
    <PublicLayout>
      <button onClick={() => setShowModal(true)}>Create a new Product</button>
      {showModal && <ProductModal setShowModal={setShowModal} />}

      <section className="custom-container">


        {products.map(p => {
          const data = p.data()
          return <ProductCard product={data} key={p.id} />
        })}

      </section>



      <AdminTable />
    </PublicLayout>
  );
}
