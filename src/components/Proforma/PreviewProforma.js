import React from 'react'

export default function PreviewProforma({ proforma_items, addToProforma }) {
    return (
        <div className='max-w-screen overflow-y-auto'>
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
                    {proforma_items.map(p => <tr key={p.code} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

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
                            <button
                                onClick={() => addToProforma(p)}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Remove
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
