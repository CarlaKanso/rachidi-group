import { db, storage } from '@/firebase/firebase';
import { addDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import React, { useState } from 'react'

export default function ProductModal({ setShowModal }) {


    const [formData, setFormData] = useState({
        description: "",
        code: "",
        category: "",
        imageUrl: "",
    })
    function handleFileDrop(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result;
                // Update the state with the image URL
                setFormData(prev => {
                    return {
                        ...prev,
                        imageUrl: imageUrl
                    }
                })
            };

            reader.readAsDataURL(file);
        }
    }

    function handleChange(e) {

        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()


        const productRef = doc(db, 'products', formData.code)

        const check = await getDoc(productRef)


        if (check.exists()) {
            return;
        }
        const imageDataUrl = formData.imageUrl

        await setDoc(productRef, {
            description: formData.description,
            code: formData.code,
            category: formData.category,
            imageUrl: ""
        })

        const storageRef = ref(storage, `productImages/${formData.code}`)
        await uploadString(storageRef, imageDataUrl, 'data_url', 'png')


        const url = await getDownloadURL(storageRef)


        await updateDoc(productRef, {
            imageUrl: url,
        })
        setShowModal(false)
    }


    return (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-40 backdrop:blur-md flex items-center justify-center z-50">


            <from className="bg-white text-black p-4 rounded-md relative">
                <button className='text-black absolute top-2 right-2' onClick={() => setShowModal(false)}>X</button>
                <div className='flex flex-col justify-center gap-4 mb-4'>
                    <label htmlFor="description">Product Description</label>
                    <input type="text" name="description" id="description" className='p-2 rounded-sm outline outline-gray-300' placeholder='Description' value={formData.description} onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center gap-4 mb-4'>
                    <label htmlFor="code">Product Code</label>
                    <input type="text" name="code" id="code" className='p-2 rounded-sm outline outline-gray-300' placeholder='Code' value={formData.code} onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center gap-4 mb-4'>
                    <label htmlFor="category">Product category</label>
                    <input type="text" name="category" id="category" className='p-2 rounded-sm outline outline-gray-300' placeholder='Category' value={formData.category} onChange={handleChange} />
                </div>
                <div className='flex flex-col justify-center gap-4 mb-4'>
                    <label htmlFor="image">Product image</label>
                    <input type="file" name="image" id="image" className='p-2 rounded-sm outline outline-gray-300' placeholder='Upload an image' onChange={handleFileDrop} />
                </div>

                <button onClick={handleSubmit}>Submit</button>

            </from>


        </div>)
}
