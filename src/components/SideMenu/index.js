import { useEffect, useState, useRef } from "react";

const SideMenu = ({ showSide, setShowSide, handlePageChange }) => {
    const [menuPosition, setMenuPosition] = useState(showSide ? "0" : "-100%");
    const menuRef = useRef(null);

    const setCookie=() => {
        console.info('cookie set')
        document.cookie = "uT=09124403693; expires=Thu, 31 Dec 2037 23:59:59 GMT; path=/";
    }

    const clearCookie=() => {
        console.info('cookie cleared')
        document.cookie = "uT=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    useEffect(() => {
        setMenuPosition(showSide ? "0" : "-100%");

        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowSide(false); // Close the side menu if clicked outside
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSide, setShowSide]);

    return (
        <div id="sideMenu" ref={menuRef} style={{ right: menuPosition }}>
            <div className="close-btn" onClick={() => setShowSide(false)}>&times;</div>
            <div onClick={() => { handlePageChange('home') }}>Profile</div>
            <div onClick={() => { handlePageChange('profile') }}>Contact</div>
            <div onClick={() => { handlePageChange('chat') }}>Help</div>
            <div onClick={() => { setCookie() }}>setCookie</div>
            <div onClick={() => { clearCookie() }}>clearCookie</div>
        </div>
    );
};

export default SideMenu;
