import OptionLanguange from "../components/modules/OptionLanguange"
import DefaultButton from "../components/modules/DefaultButton"
import { useNavigate } from "react-router-dom"
import { languageAtom } from "../jotai/atoms"
import { useAtom } from "jotai"
function Navbar() {
    const navigate = useNavigate()
    const [language] = useAtom(languageAtom)
    return (
        <header className="relative z-20 max-w-7xl mx-auto">
            <nav className="flex justify-between items-center px-2 sm:px-10">
                <div>
                    <img src="/netflix-logo.png" alt="netlfix-logo" width={175} height={70} />
                </div>
                <div className="flex items-center gap-4">
                    <OptionLanguange />
                    <DefaultButton text={language === "English" ? "Sign In" : "Masuk"} onClick={() => { navigate("/login") }} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar