import favicon32 from './../assets/favicon-32x32.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

// To Do 1: Spacing and styling
// To Do 2: The header is static when the page is scrolled.


function Header() {

    return (
      <div className="header-container">
        <h1>Montréal</h1>
        <a href="https://react.dev" target="_blank">
          <img src={favicon32} className="logo react" alt="Montréal logo" />
        </a>
        <RxHamburgerMenu />
        <p>Menu</p>
        <CiSearch />
        <p>Recherche</p>
        <RiAccountCircleLine />
        <p>Mon Compte</p> 
        </div> 
    )
}

export default Header;