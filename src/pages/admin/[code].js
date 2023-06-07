import Button from '@/components/common/Button'
import PublicLayout from '@/components/layout/PublicLayout'
import { db } from '@/firebase/firebase'
import { withAdmin } from '@/hooks/routes'
import { collection, collectionGroup, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

function Product({ product }) {
    const [thisProduct, setThisProduct] = useState(product || {})
    const [allCategories, setAllCategories] = useState([])

    function handleChange(e) {

        setDisableCancel(false)
        setThisProduct(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    useEffect(() => {
        async function getAllCategories() {
            const arrayOfCategories = [];
            const chtouraCategories = await getDocs(
                collectionGroup(db, "subcategories")
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
    function handleProforma(e) {
        setDisableCancel(false)
        const { value, checked } = e.target;
        if (checked) {
            setThisProduct((prev) => ({
                ...prev,
                proforma_type: [...prev.proforma_type, value],
            }));
        } else {
            setThisProduct((prev) => {
                const resultArray = prev.proforma_type.filter((type) => type != value);
                return {
                    ...prev,
                    proforma_type: resultArray,
                };
            });
        }
    }

    const [disableCancel, setDisableCancel] = useState(true)
    function handleCancel() {
        setThisProduct(product)
        setDisableCancel(true)
    }

    function handleFileDrop(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result;
                // Update the state with the image URL
                setThisProduct((prev) => {
                    return {
                        ...prev,
                        imageUrl: imageUrl,
                    };
                });
                setDisableCancel(false)
            };

            reader.readAsDataURL(file);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();

        const productRef = doc(db, "products", thisProduct.code);

        const imageDataUrl = thisProduct.imageUrl;

        await updateDoc(productRef, {
            description: thisProduct.description,
            code: thisProduct.code,
            category: thisProduct.category,
            proforma_type: thisProduct.proforma_type,
        });

        if (thisProduct.imageUrl.startsWith('data')) {
            const storageRef = ref(storage, `productImages/${thisProduct.code}`);
            await uploadString(storageRef, imageDataUrl, "data_url", "png");

            const url = await getDownloadURL(storageRef);

            await updateDoc(productRef, {
                imageUrl: url,
            });
        }
        setDisableCancel(true)
    }

    return (
        <PublicLayout>
            <form className="flex gap-4 relative container mx-auto px-12 items-center">
                <div className='w-[50%]'>
                    <label htmlFor='image' className='hover:opacity-80 transition-all rounded-3xl bg-white hover:bg-white bg-opacity-20 block cursor-pointer'>
                        {/* eslint-disable-next-line */}
                        <img
                            alt=""
                            src={thisProduct.imageUrl}
                            className="h-full w-full object-cover"
                        />
                    </label>
                    <input onChange={handleFileDrop} className="hidden" accept='.png, .jpeg, .jpg, .webp, .gif' id="image" type="file" />
                </div>

                <div className="relative p-4 flex-grow sm:p-6 lg:p-8 flex flex-col gap-4">
                    <div className='w-full'>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description or Title</label>
                        <input type='text' value={thisProduct.description} onChange={handleChange} id='description' name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <input type='text' value={thisProduct.code} onChange={handleChange} id='code' name='code' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select
                            name="category"
                            id="category"
                            value={thisProduct.category}
                            onChange={handleChange}
                            className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {allCategories.map((c) => (
                                <option key={c} value={c} className="capitalize">
                                    {c.replaceAll("_", " ")}
                                </option>
                            ))}
                        </select>
                    </div>

                    <fieldset>
                        <legend className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Proforma Type</legend>
                        <div className="flex items-center mb-4">
                            <input id="export" type="checkbox" onChange={handleProforma} value="export" checked={thisProduct.proforma_type.includes("export")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="export" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Export and Import</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="wholesale" type="checkbox" onChange={handleProforma} value="wholesale" checked={thisProduct.proforma_type.includes("wholesale")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="wholesale" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wholesale and retail</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="parcel" type="checkbox" onChange={handleProforma} value="parcel" checked={thisProduct.proforma_type.includes("parcel")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="parcel" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food parcels</label>
                        </div>
                    </fieldset>

                    <Button onClick={handleSubmit}>Save</Button>
                    <button onClick={handleCancel} disabled={disableCancel} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 disabled:opacity-20 disabled:pointer-events-none">
                        <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Cancel
                        </span>
                    </button>
                </div>
            </form>
        </PublicLayout>
    )
}

export async function getServerSideProps(req, res) {


    const { code } = req.query

    const product = await getDoc(doc(db, 'products', code))


    return {
        props: {
            product: product.data(),
        }
    }


}
export default withAdmin(Product)