import favicon32 from './../assets/favicon-32x32.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

// To Do 1: Spacing and styling
// To Do 2: The header is static when the page is scrolled.


function Header() {

    return (
      <div className="header">
      <div className="navbar">

        <NavLink to="/">
        <h1>Montréal</h1>
        </NavLink>
          <img src={favicon32} className="logo react" alt="Montréal logo" />

        <RxHamburgerMenu />
        <p>Menu</p>
        <CiSearch />
        <p>Recherche</p>
        <RiAccountCircleLine />
        <p>Mon Compte</p> 
        </div> 
        </div>
    )
}

export default Header;