import OptionLanguange from "../components/modules/OptionLanguange"
import DefaultButton from "../components/modules/DefaultButton"
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <header className="relative z-20">
            <nav className="flex justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="/netflix-logo.png" alt="netlfix-logo" width={105} height={45} />
                </div>
                <div className="flex items-center gap-4">
                    <OptionLanguange />
                    <DefaultButton text="Sign In" onClick={() => { navigate("/login") }} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar