import React, { useState } from "react";
import "./Navbar.css"; // Assuming your CSS is in this file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome components
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const handleLogout = ()=>{
        localStorage.removeItem('authToken')
    }
  const [isNavOpen, setIsNavOpen] = useState(false); // State to handle open/close nav

  return (
    <header>
      <nav className={`navbar ${isNavOpen ? "openNav" : ""}`}>
        <div className="container">
          <div className="icons">
            {/* Show either the bar or the close icon based on state */}
            {!isNavOpen ? (
              <FontAwesomeIcon
                icon={faBars}
                id="bar-open"
                onClick={() => setIsNavOpen(true)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                id="x-closed"
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>

          <ul className={`menu-items ${isNavOpen ? "menu-responsive-items" : ""}`}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Blogs</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            {
            localStorage.getItem('authToken')?
            <>
             <Link to='/' onClick={handleLogout}>Logout</Link>
            </>:<>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>  
                    
                </>
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
