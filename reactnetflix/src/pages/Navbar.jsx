import OptionLanguange from "../components/modules/OptionLanguange"
import DefaultButton from "../components/modules/DefaultButton"
import { languageAtom } from "../jotai/atoms"
import { useAtom } from "jotai"
function Navbar() {

    const [language] = useAtom(languageAtom)
    return (
        <header className="relative z-20 max-w-7xl mx-auto">
            <nav className="flex justify-between items-center px-2 sm:px-10">
                <div>
                    <img src="/netflix-logo.png" alt="netlfix-logo" width={175} height={70} />
                </div>
                <div className="flex items-center gap-4">
                    <OptionLanguange />
                    <DefaultButton text={language === "English" ? "Sign In" : "Masuk"} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar