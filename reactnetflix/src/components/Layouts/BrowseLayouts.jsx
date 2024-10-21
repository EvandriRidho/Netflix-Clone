import React from 'react'
import NavbarBrowse from "../../pages/NavbarBrowse"

const BrowseLayouts = ({ children }) => {
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