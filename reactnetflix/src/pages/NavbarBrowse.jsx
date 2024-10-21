import AccountMenu from "../components/modules/BrowsePage/AccountMenu"
import InputSearchMovies from "../components/modules/BrowsePage/InputSearchMovies"
import { LIST_NAVBAR } from "../Constants/ListNavbar"
import EachUtils from "../utils/EachUtils"

const NavbarBrowse = () => {
    return (
        <header className="relative">
            <nav className="bg-transparent fixed text-white top-0 left-0 px-8 w-full z-10">
                <div className="flex items-center justify-between">
                    {/* Logo and Navbar */}
                    <div className="flex items-center gap-4">
                        <img src="/netflix-logo.png" alt="netlfix-logo" className="w-[120px] ml-2" />
                        <ul className="hidden sm:flex items-center gap-4">
                            <EachUtils
                                of={LIST_NAVBAR}
                                render={(item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )}
                            />
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Search Button */}
                        <InputSearchMovies />
                        {/* Logout Button */}
                        <AccountMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavbarBrowse