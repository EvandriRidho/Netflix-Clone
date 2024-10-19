import { useAtom } from "jotai"
import { FAQ_TITLE_EN, LIST_FAQ_EN, FAQ_TITLE_ID, LIST_FAQ_ID } from "../../Constants/ListFAQ"
import { languageAtom } from "../../jotai/atoms"
import EachUtils from "../../utils/EachUtils"
import { motion } from "framer-motion"
import { useState } from "react"
import InputMembership from "./InputMembership"

const SectionFAQ = () => {
    const [language] = useAtom(languageAtom)
    const [openContentIndex, setContentIndex] = useState(null)
    return (
        <div className="w-full p-16 bg-black ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl mb-8 font-black text-white text-center">{language === "English" ? FAQ_TITLE_EN : FAQ_TITLE_ID}</h2>
                <ul className="flex flex-col gap-2 py-8">
                    <EachUtils
                        of={language === "English" ? LIST_FAQ_EN : LIST_FAQ_ID}
                        render={(item, index) => (
                            <li key={index}>
                                <div className="bg-[#2d2d2d] hover:bg-[414141] text-white">
                                    <button className="flex p-8 justify-between items-center w-full"
                                        onClick={() => setContentIndex(openContentIndex === index ? null : index)}
                                    >
                                        <span className="font-semibold text-md sm:text-xl text-left">{item.title}</span>
                                        <motion.div
                                            animate={{ rotate: openContentIndex === index ? 45 : 0 }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                width="36"
                                                height="36"
                                                viewBox="0 0 36 36"
                                                role="img"
                                                aria-hidden="true"
                                                className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                                                    fill="currentColor"
                                                >
                                                </path>
                                            </svg>
                                        </motion.div>
                                    </button>
                                </div>
                                <motion.div className="mt-1 p-8 text-left text-white bg-[#2d2d2d]"
                                    initial={{ translateY: -10 }}
                                    animate={{ translateY: openContentIndex === index ? 0 : -10 }}
                                    style={{ display: openContentIndex === index ? "block" : "none" }}
                                >
                                    <p className="text-xl">{item.desc}</p>
                                </motion.div>
                            </li>
                        )}
                    />
                </ul>
                <div className="max-w-xl mx-auto mt-4 text-center">
                    <InputMembership />
                </div>
            </div>
        </div>

    )
}

export default SectionFAQ