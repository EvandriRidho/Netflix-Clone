import React from 'react'
import SectionLayouts from '../Layouts/SectionLayouts'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '../../Constants/ListAssets'
import { LIST_CONTENT_2_EN, LIST_CONTENT_2_ID } from "../../Constants/ListContent"
import EachUtils from '../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'

const SectionDownload = () => {
    const [language] = useAtom(languageAtom)
    return (
        <SectionLayouts>
            <div className='relative max-w-xl mx-auto'>
                <img src={DOWNLOAD_PHONE_IMAGE} alt='phone-img' className='relative' />
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-black border border-white flex items-center rounded-xl py-2 px-4 w-[60%] gap-4'>
                    <img src={DOWNLOAD_COVER_IMAGE} alt='cover-img' className='max-h-20' />
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>Stranger Things</p>
                        <p className='text-blue-400 font-semibold'>Download....</p>
                    </div>
                </div>
            </div>

            <EachUtils
                of={language === "English" ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID}
                render={(item, index) => (
                    <div key={index} className='px-4'>
                        <h2 className='font-black text-5xl '>{item.title}</h2>
                        <p className='text-2xl mt-4'>{item.desc}</p>
                    </div>
                )}
            />
        </SectionLayouts>
    )
}

export default SectionDownload