import { db, storage } from "@/firebase/firebase";
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useEffect, useState } from "react";

export default function ProductModal({ setShowModal }) {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function getAllCategories() {
      const arrayOfCategories = [];
      const chtouraCategories = await getDocs(
        collectionGroup(db, "subcatergories")
      );
      chtouraCategories.forEach((chtoura) => {
        arrayOfCategories.push("chtoura_" + chtoura.data().name);
      });

      const q = query(
        collection(db, "categories"),
        where("name", "!=", "chtoura_fields")
      );
      const normalCategories = await getDocs(q);

      normalCategories.forEach((normal) => {
        arrayOfCategories.push(normal.data().name);
      });

      setAllCategories(arrayOfCategories);
    }
    getAllCategories();
  }, []);

  const [formData, setFormData] = useState({
    description: "",
    code: "",
    category: "",
    imageUrl: "",
    proforma_type: [],
  });
  function handleFileDrop(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;
        // Update the state with the image URL
        setFormData((prev) => {
          return {
            ...prev,
            imageUrl: imageUrl,
          };
        });
      };

      reader.readAsDataURL(file);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const productRef = doc(db, "products", formData.code);

    const check = await getDoc(productRef);

    if (check.exists()) {
      return;
    }
    const imageDataUrl = formData.imageUrl;

    await setDoc(productRef, {
      description: formData.description,
      code: formData.code,
      category: formData.category,
      proforma_type: formData.proforma_type,
      imageUrl: "",
    });

    const storageRef = ref(storage, `productImages/${formData.code}`);
    await uploadString(storageRef, imageDataUrl, "data_url", "png");

    const url = await getDownloadURL(storageRef);

    await updateDoc(productRef, {
      imageUrl: url,
    });
    setShowModal(false);
  }

  function handleProforma(e) {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        proforma_type: [...prev.proforma_type, value],
      }));
    } else {
      setFormData((prev) => {
        const resultArray = prev.proforma_type.filter((type) => type != value);
        return {
          ...prev,
          proforma_type: resultArray,
        };
      });
    }
  }

  return (
    <>
      <div
        id="product-creation-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full flex items-center justify-center bg-neutral-500 bg-opacity-50 backdrop-blur-md"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="product-creation-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create a Product
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product description
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.description}
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter a description"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your code
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.code}
                    type="text"
                    name="code"
                    id="code"
                    placeholder="Enter code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select a category
                  </label>

                  <select
                    name="category"
                    id="category"
                    defaultValue={""}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={""} className="capitalize">
                      Select A Category
                    </option>
                    {allCategories.map((c) => (
                      <option key={c} value={c} className="capitalize">
                        {c.replaceAll("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="image"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image"
                    onChange={handleFileDrop}
                    type="file"
                    required
                  />
                </div>
                <fieldset>
                  <legend>Proforma Type</legend>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      onChange={handleProforma}
                      id="export"
                      type="checkbox"
                      value="export"
                      name="proforma"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label
                      htmlFor="export"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Export
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      onChange={handleProforma}
                      id="wholesale"
                      type="checkbox"
                      value="wholesale"
                      name="proforma"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label
                      htmlFor="wholesale"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Wholesale and Retail
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      onChange={handleProforma}
                      id="parcel"
                      type="checkbox"
                      value="parcel"
                      name="proforma"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label
                      htmlFor="parcel"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Food Parcel
                    </label>
                  </div>
                </fieldset>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
