import React from 'react'
import SectionLayouts from '../Layouts/SectionLayouts'
import EachUtils from '../../utils/EachUtils'
import { LIST_CONTENT_1_EN, LIST_CONTENT_1_ID } from "../../Constants/ListContent.js"
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from "../../Constants/ListAssets.js"
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms.js'


const SectionEnjoy = () => {
    const [language] = useAtom(languageAtom)
    return (
        <SectionLayouts>
            <EachUtils
                of={language === "English" ? LIST_CONTENT_1_EN : LIST_CONTENT_1_ID}
                render={(item, index) => (
                    <div key={index} className='px-4'>
                        <h2 className='font-black text-3xl sm:text-5xl '>{item.title}</h2>
                        <p className='text-lg sm:text-xl mt-4'>{item.desc}</p>
                    </div>
                )}
            />
            <div className='relative max-w-xl mx-auto'>
                <img src={ENJOY_TV_IMAGE} alt='tv-img' className='relative z-10' />
                <div className='absolute top-20 left-20 w-[73%]'>
                    <video autoPlay loop muted>
                        <source src={ENJOY_TV_VIDEO} type="video/mp4" />
                    </video>
                </div>
            </div>
        </SectionLayouts>
    )
}

export default SectionEnjoy