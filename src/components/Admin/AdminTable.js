import { useEffect, useState } from "react";
import Button from "../common/Button";
import ProductModal from "./ProductModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function AdminTable() {
  const [showModal, setShowModal] = useState(false);


  const [products, setProducts] = useState([])


  useEffect(() => {
    let productsArray = []
    getDocs(collection(db, 'products'))
      .then(snapShot => {
        snapShot.forEach(p => productsArray.push(p.data()))
        setProducts(productsArray)
      })
  }, [])


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto px-4">
      <div className="pb-4 bg-white dark:bg-gray-900 flex justify-center items-center flex-wrap">
        <div className="relative mt-1 mr-auto">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <Button className="ml-auto mr-5" onClick={() => setShowModal(true)}>
          Create a new Product
        </Button>
        {showModal && <ProductModal setShowModal={setShowModal} />}
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  rounded-lg">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Title / Description
            </th>
            <th scope="col" className="px-6 py-3">
              Proforma Type
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Item Code
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => <tr key={p.code} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {p.description}
            </th>
            <td className="px-6 py-4">{p.proforma_type.join(", ")}</td>
            <td className="px-6 py-4">{p.category}</td>
            <td className="px-6 py-4">{p.code}</td>
            <td className="px-6 py-4">
              <a
                href={"/admin/" + p.code}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}
