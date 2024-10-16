import { useAtom } from "jotai"
import { languageAtom } from "../jotai/atoms"

function Navbar() {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className="navbar">
            <h3>Netflix Clone</h3>
            <div>
                <button className="btn btn-active btn-accent mr-4" onClick={() => setLanguage("id")}>Indonesia</button>
                <button className="active:bg-red-500 hover:bg-yellow-500 " onClick={() => setLanguage("en")}>English</button>
            </div>
        </div>
    )
}

export default Navbar