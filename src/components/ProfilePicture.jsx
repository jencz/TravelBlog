import { useRef } from "react";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import pfpLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function ProfilePicture() {
    return (
        <div className="App-logo-container">
            <img src={pfpLogo} className="App-logo" alt="logo" />
            <div className="App-logo-dropdown">
                <Link to="/profile">
                    <CgProfile className="navbar-icon" size={32} />
                </Link>
  
                <CgDarkMode className="navbar-icon" size={32} />
                <MdOutlineSettings className="navbar-icon" size={32} />
                <TbLogout className="navbar-icon" size={32} />
            </div>
        </div>
    )
}