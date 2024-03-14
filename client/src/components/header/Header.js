import React, { useState } from "react";
import { FaPaw } from 'react-icons/fa';
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryMenuOpen, setGalleryMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('token', "role");
  const navigate = useNavigate()

  const toggleGalleryMenu = () => {
    setGalleryMenuOpen(!galleryMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login')
  };

  return (
    <nav>
      <Link to="/" className="title">
        <FaPaw className='icon'/>
        PawDopt
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <div className="dropdown" onClick={toggleGalleryMenu}>
            <span>Gallery</span>
            {galleryMenuOpen && (
              <ul className="gallery-dropdown">
                <li>
                  <NavLink to="/items-donated">Items Donated</NavLink>
                </li>
                <li>
                  <NavLink to="/successful-adopted">Sucessfully Adopted Friend</NavLink>
                </li>
                <li>
                  <NavLink to="/available-to-adopt">Furbabies Who Needs a Home</NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/how-to">FAQs</NavLink>
        </li>
        {!isLoggedIn ? (
          <li>
            <NavLink to="/signup">Join us</NavLink>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        )}
        <li>
          <NavLink to="/help-us">Help us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
