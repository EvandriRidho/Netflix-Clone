const AccountMenu = () => {
    return (
        <div className="flex dropdown dropdown-hover dropdown-end cursor-pointer">
            <div className="avatar" tabIndex={0}>
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <button
                tabIndex={0}
                onClick={() => console.log("Sign Out")}
                className="dropdown-content top-10 w-32 py-1 bg-black "
            >Sign Out</button>
        </div>
    )
}

export default AccountMenu;