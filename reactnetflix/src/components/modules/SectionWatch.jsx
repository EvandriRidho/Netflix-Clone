import React from 'react'
import SectionLayouts from '../Layouts/SectionLayouts'
import EachUtils from '../../utils/EachUtils'
import { LIST_CONTENT_3_EN, LIST_CONTENT_3_ID } from "../../Constants/ListContent.js"
import { WATCH_DEVICE_IMAGE, WATCH_DEVICE_VIDEO } from "../../Constants/ListAssets.js"
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms.js'

const SectionWatch = () => {
    const [language] = useAtom(languageAtom)
    return (
        <SectionLayouts>
            <EachUtils
                of={language === "English" ? LIST_CONTENT_3_EN : LIST_CONTENT_3_ID}
                render={(item, index) => (
                    <div key={index} className='px-8'>
                        <h2 className='font-black text-5xl '>{item.title}</h2>
                        <p className='text-2xl'>{item.desc}</p>
                    </div>
                )}
            />
            <div className='relative max-w-xl mx-auto'>
                <img src={WATCH_DEVICE_IMAGE} alt='watch-img' className='relative z-10' />
                <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[60%]'>
                    <video autoPlay loop muted>
                        <source src={WATCH_DEVICE_VIDEO} type="video/mp4" />
                    </video>
                </div>
            </div>
        </SectionLayouts>
    )
}

export default SectionWatch