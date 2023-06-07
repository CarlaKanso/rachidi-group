import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function ProductGrid({ proforma_type, addToProforma, proforma_items }) {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (proforma_type != undefined) {
      getDocs(
        query(
          collection(db, "products"),
          where("proforma_type", "array-contains", proforma_type)
        )
      ).then((snapshot) => {
        let array = [];

        snapshot.forEach((c) => {
          array.push(c.data());
        });

        setProducts(array);
      });
    }
  }, [proforma_type]);


  return (
    <section>
      <div>
        <header>

          <h1 className="text-2xl text-center font-bold text-gray-900 dark:text-gray-200 sm:text-5xl capitalize">
            {proforma_type == "wholesale" ? "wholesale and retail" : proforma_type == "parcel" ? "food parcels" : proforma_type}
          </h1>
        </header>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex rounded">
          </div>

          <div>
            <label htmlFor="SortBy" className="sr-only">
              SortBy
            </label>

            <select
              id="SortBy"
              className="h-10 rounded border-gray-300 text-sm dark:bg-gray-800"
            >
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.code}>
              <ProductCard product={p} added={proforma_items.some(product => p.code == product.code)} addToProforma={addToProforma} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
