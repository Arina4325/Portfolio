import { NavLink } from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import "./style.css";


const NavBar = () => {

    /*to change CSS class from active/to no-ative link: create consts (activeLink/noActiveLink) and create function inside element (NavLink)) className={({isActive})=>isActive ? activeLink : noActiveLink} */
    const activeLink = 'nav-list__link nav-list__link--active';
    const noActiveLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    {/*logo*/}
                    <NavLink to="/" className="logo"> 
                    <strong>Developer's</strong> Portfolio
                    </NavLink>

                    <BtnDarkMode/>
                    
                    {/*links NavBar*/}
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : noActiveLink}>
                            Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="./projects" className={({isActive})=>isActive ? activeLink : noActiveLink}>
                            Projects
                            </NavLink>
                         </li>

                        <li className="nav-list__item">
                            <NavLink to="./contacts" className={({isActive})=>isActive ? activeLink : noActiveLink}>
                            Contacts
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
      </nav>
    );
}

export default NavBar;

