import React from 'react'
import Button from '../common/Button';

export default function ProformaSubmit({ proforma_type, proforma_items, setProforma_items, setCurrentStep }) {


    function submit() {
        const mailtoUrl = "mailto:carla_kanso23@outlook.com";

        const subject = "Proforma-Table";

        let body = "Proforma Type: " + proforma_type + "\n";

        proforma_items.forEach(p => {
            body += `\nDescription: ${p.description}\nCode: ${p.code}\nCategory: ${p.category}\n`
        })


        const finalUrl = `${mailtoUrl}?subject=${subject}&body=${encodeURIComponent(body)}`;

        const a = document.createElement("a")
        a.href = finalUrl
        a.click()


        setProforma_items([])
        a.remove()
        setCurrentStep(0)
    }

    return (
        <div>
            <Button onClick={submit}>Submit</Button>
        </div>
    )
}
