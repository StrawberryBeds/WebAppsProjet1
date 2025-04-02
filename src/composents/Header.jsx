import favicon32 from "/Users/samuelwood/Documents/WebApps/WebAppsProjet1/src/assets/favicon-32x32.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

function Header() {

    return (
        <>
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
        </> 
    )
}

export default Header;