import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [product, setProduct] = useState([])
useEffect(()=> {
  const ref = collection(db, 'products')
  getDocs(ref).then(arr => {
    setProduct(arr.docs)
  })
})


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
{
  product.map(p => {
    const data = p.data()
    
    
    return <a key={data.code} href={data.image_url} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg" src={data.image_url} alt={data.description + ' image'} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.code}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
        </div>
    </a>
    
  })
}
</div>
      
    </main>
  )
}
