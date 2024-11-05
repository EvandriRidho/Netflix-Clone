import React from 'react'
import NavbarBrowse from "../../pages/NavbarBrowse"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../utils/firebase'
import Loading from '../modules/Elements/Loading'

const BrowseLayouts = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <Loading />
    if (error) return <p>Error</p>
    if (!user) return location.replace("/")

    return (
        <>
            <NavbarBrowse />
            <div>
                {children}
            </div>
        </>
    )
}

export default BrowseLayouts