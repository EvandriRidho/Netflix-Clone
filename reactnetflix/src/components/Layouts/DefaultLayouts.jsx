import Navbar from "../../pages/Navbar";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../utils/firebase"
import Loading from "../modules/Elements/Loading";
const DefaultLayouts = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <Loading />
    if (error) return <p>Error</p>
    if (user) return location.replace("/browse")

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayouts;