import favicon32 from './../assets/favicon-32x32.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

// To Do 1: Spacing and styling
// To Do 2: The header is static when the page is scrolled.


function Header() {

  return (

    <header className="header">
    <div className="header-left">
    <NavLink to="/">
      <div className="organization-name">Montréal</div>
      </NavLink>
      <img src={favicon32} className="montreal logo" alt="Montréal logo" />
      <RxHamburgerMenu />
      <p>Menu</p>
    </div>
    <div className="header-right">
    
    <CiSearch />
    <p>Recherche</p>
    <RiAccountCircleLine />
    <p>Mon Compte</p>
    </div>
  </header>



    // <div className="header">
    //   <div className="navbar">

    //     <div className="navbar-right">
    //       
   
    //         
    //      
    //       
    //     </div>

    //     <div className="navbar-left">
    //       
    //       
    //       
    //       <RiAccountCircleLine />
    //       
    //     </div>

    //   </div>
    // </div>
  )
}

export default Header;