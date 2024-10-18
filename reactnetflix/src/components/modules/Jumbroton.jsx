import React from 'react'
import { JUMBOTRON_IMAGE } from "../../Constants/ListAssets"
import EachUtils from "../../utils/EachUtils"
import { LIST_JUMBROTON_EN, LIST_JUMBROTON_ID } from "../../Constants/ListJumbroton"
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import InputMembership from './InputMembership'
const Jumbroton = () => {
    const [language] = useAtom(languageAtom)
    return (
        <div className='px-8 mb-16'>
            <img src={JUMBOTRON_IMAGE} alt="jumbroton-img" className='absolute top-0 left-0 h-[700px] w-full object-cover opacity-60' />

            <EachUtils of={language === "English" ? LIST_JUMBROTON_EN : LIST_JUMBROTON_ID} render={(item, index) => (
                <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                    <h1 className='text-5xl text-white font-black'>{item.title}</h1>
                    <p className='text-xl text-white font-semibold'>{item.desc}</p>
                    <InputMembership />
                </div>
            )} />
        </div>
    )
}

export default Jumbroton