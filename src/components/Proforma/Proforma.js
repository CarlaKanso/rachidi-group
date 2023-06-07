import React, { useState } from 'react'
import ProductGrid from './ProductGrid'
import PreviewProforma from './PreviewProforma'
import Button from '../common/Button'
import ProformaSubmit from './ProformaSubmit'

export default function Proforma({ proforma_type }) {


    const [currentStep, setCurrentStep] = useState(0)
    const [proforma_items, setProforma_items] = useState([])

    function addToProforma(product) {

        if (proforma_items.some(p => p.code == product.code)) {
            setProforma_items(prev => prev.filter(p => p.code != product.code))
            return
        }

        setProforma_items(prev => ([...prev, product]))
    }

    const setps = [
        <ProductGrid addToProforma={addToProforma} proforma_items={proforma_items} proforma_type={proforma_type} setCurrentStep={setCurrentStep} key={0} />,
        <PreviewProforma addToProforma={addToProforma} proforma_items={proforma_items} setCurrentStep={setCurrentStep} key={1} />,
        <ProformaSubmit proforma_type={proforma_type} proforma_items={proforma_items} setProforma_items={setProforma_items} setCurrentStep={setCurrentStep} key={2} />
    ]

    function handleNext() {
        if (currentStep == 2) {
            return
        }
        setCurrentStep(prev => prev + 1)
    }
    function handlePrev() {
        if (currentStep == 0) {
            return
        }
        setCurrentStep(prev => prev - 1)
    }

    return (
        <section className='container mx-auto px-4'>

            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base max-w-3xl mx-auto mt-12">
                <li className={`flex md:w-full items-center ${currentStep == 0 ? " text-blue-600 dark:text-blue-500" : ""} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Select <span class="hidden sm:inline-flex sm:ml-2">Product</span>
                    </span>
                </li>
                <li className={`${currentStep == 1 ? " text-blue-600 dark:text-blue-500" : ""} flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <span class="mr-2">2</span>
                        Preview <span class="hidden sm:inline-flex sm:ml-2">Proforma</span>
                    </span>
                </li>
                <li className={`${currentStep == 2 ? " text-blue-600 dark:text-blue-500" : ""} flex items-center`}>
                    <span class="mr-2">3</span>
                    Submit
                </li>
            </ol>

            <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>{setps[currentStep]}</div>

            <div className="fixed bottom-4 left-4 z-20"><Button onClick={handlePrev}>Prev</Button></div>
            <div className="fixed bottom-4 right-4 z-20"><Button onClick={handleNext}>Next</Button></div>
        </section>
    )
}
