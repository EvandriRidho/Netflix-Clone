import React from 'react'
import SectionLayouts from '../Layouts/SectionLayouts'
import { PROFILE_KIDS_IMAGE } from '../../Constants/ListAssets'
import { LIST_CONTENT_4_EN, LIST_CONTENT_4_ID } from "../../Constants/ListContent"
import EachUtils from '../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
export const SectionProfile = () => {
    const [language] = useAtom(languageAtom)
    return (
        <SectionLayouts>
            <div>
                <img src={PROFILE_KIDS_IMAGE} alt='kids-img' />
            </div>
            <EachUtils
                of={language === "English" ? LIST_CONTENT_4_EN : LIST_CONTENT_4_ID}
                render={(item, index) => (
                    <div key={index}>
                        <h2 className='text-5xl font-black'>{item.title}</h2>
                        <p className='text-2xl mt-4'>{item.desc}</p>
                    </div>
                )}
            />
        </SectionLayouts>
    )
}
