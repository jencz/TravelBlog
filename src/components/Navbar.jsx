import { useRef } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { MdOutlineGames } from "react-icons/md";
import { LuLibraryBig } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";

export default function Navbar() {
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length) {
            console.log("Selected files:", files);
            // You can now loop through and handle each file
        }
    };
    

    return (
        <nav>
            <Link to="/">
                <TiHomeOutline className="navbar-icon" size={35} />
            </Link>
            
            <Link to="/trips">
                <GrProjects className="navbar-icon" size={32} />
            </Link>
            

            <div id="plus-icon" onClick={handleFileClick}>
                <AiOutlinePlus className="plus-icon" size={30} />
                <input
                    type="file"
                    accept="video/*"
                    multiple
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

            </div>

            <Link to="/games">
                <GrSearch className="navbar-icon" size={32} />
            </Link>
            
            <Link to="/library">
                <LuLibraryBig className="navbar-icon" size={32} />
            </Link>          
        </nav>
    );
}
