import { useEffect, useState, useRef } from "react";

const SideMenu = ({ showSide, setShowSide }) => {
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
            <div>Profile</div>
            <div>Contact</div>
            <div>Contact</div>
        </div>
    );
};

export default SideMenu;
