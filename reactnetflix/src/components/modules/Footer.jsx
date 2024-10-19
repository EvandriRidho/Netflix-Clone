import React from 'react'
import EachUtils from '../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from "../../Constants/ListFooter"
import OptionLanguange from './OptionLanguange'


const Footer = () => {
    const [language] = useAtom(languageAtom)
    return (
        <div className='w-full p-16 bg-black'>
            <div className='max-w-7xl mx-auto'>
                <h2>{language === "English" ? "Questions? Call 007-803-321-2130" : "Ada pertanyaan? Hubungi 007-803-321-2148"}</h2>
                <ul className='grid sm:grid-cols-4 gap-4 py-8'>
                    <EachUtils
                        of={language === "English" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
                        render={(item, index) => (
                            <li key={index}>
                                <a href={item.url} className='underline'>{item.title}</a>
                            </li>
                        )}
                    />
                </ul>
                <OptionLanguange />
                <p className='mt-4'>Netflix Indonesia</p>
            </div>
        </div>
    )
}

export default Footer