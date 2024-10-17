import { useAtom } from "jotai"
import OptionLanguange from "../components/modules/OptionLanguange"
import DefaultButton from "../components/modules/DefaultButton"
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <header>
            <nav className="flex justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="../../public/netflix-logo.png" alt="netlfix-logo" width={105} height={45} />
                </div>
                <div className="flex items-center gap-4">
                    <OptionLanguange />
                    <DefaultButton onClick={() => { navigate("/login") }}>Sign In</DefaultButton>
                </div>
            </nav>
        </header>
    )
}

export default Navbar