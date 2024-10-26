import React from 'react'
import EachUtils from '../../utils/EachUtils'
import { emailAtom, languageAtom } from '../../jotai/atoms'
import { useAtom } from 'jotai'
import { LIST_CTA_EN, LIST_CTA_ID } from "../../Constants/ListCTA"
import DefaultButton from './DefaultButton'
import { useNavigate } from 'react-router-dom'

const InputMembership = () => {
    const navigate = useNavigate()
    const [language] = useAtom(languageAtom)
    const [, setEmail] = useAtom(emailAtom)
    const handleEmail = (e) => {
        e.preventDefault()
        navigate("/register")
    }
    return (
        <form>
            <EachUtils
                of={language === "English" ? LIST_CTA_EN : LIST_CTA_ID}
                render={(item, index) => (
                    <div key={index} className='flex flex-col gap-4 relative z-20'>
                        <h3 className='text-white'>{item.title}</h3>
                        <div className='relative flex justify-center items-center gap-4 py-4'>
                            <input placeholder={item.inputLabel} className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent ' type='email' onChange={(e) => setEmail(e.target.value)} />
                            <lebel className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all'>{item.inputLabel}</lebel>
                            <DefaultButton
                                styles={"flex py-4 w-1/2 justify-center items-center gap-2 "}
                                isArrowIcon={true}
                                text={item.buttonSubmit}
                                onClick={handleEmail}
                            />
                        </div>
                    </div>
                )}
            />
        </form>
    )
}

export default InputMembership