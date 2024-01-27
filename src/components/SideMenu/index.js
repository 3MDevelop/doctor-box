import { useEffect, useState, useRef } from "react";

const SideMenu = ({ showSide, setShowSide, handlePageChange }) => {
    const [menuPosition, setMenuPosition] = useState(showSide ? "0" : "-100%");
    const menuRef = useRef(null);

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
        </div>
    );
};

export default SideMenu;
