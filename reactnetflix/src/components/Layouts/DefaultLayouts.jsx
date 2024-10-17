import Navbar from "../../pages/Navbar";

const DefaultLayouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayouts;