import { Link, useLocation } from "react-router-dom";
import "./style.css"

export default function Header() {

    const location = useLocation().pathname;
    function launcher() {
        if (location !== "/") {
            return (
                <div id="menu" className="flex p-7 place-content-between items-center">
                    <h1 className="text-3xl nav-title bg-black text-white italic">Sree Kandula://</h1>
                    <nav className="text-right">
                        <ul className="flex"> 
                        <li><Link to="/home" className="m-3">H0ME</Link></li>
                        <li><Link to="/illustration" className="m-3">illustration</Link></li>
                        <li><Link to="/design" className="m-3">graphicDesign</Link></li>
                        <li><Link to="/ux" className="m-3">uxCaseStudies</Link></li>
                        <li><Link to="/khoury" className="m-3">khoury</Link></li>
                        <li><Link to="/about" className="m-3">aboutMe</Link></li>
                        </ul>
                    </nav>
                </div>
            );
        }
    }

    return (
        <div>
            {launcher()}
        </div>
    );
}