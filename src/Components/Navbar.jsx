// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import "../style/Navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";
import styled from "styled-components"; // Import styled-components for Nav styling

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Define the Nav styled component
  const Nav = styled.nav`
    /* Add your custom styling here */
    .navbar-list {
      display: flex;
      gap: 1.5rem;
      list-style: none;

      .navbar-link {
        text-decoration: none;
        font-size: 1.8rem;
        color: black;
      }
    }

    .mobile-navbar-btn {
      display: none;
    }

    @media (max-width: 768px) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;

        .mobile-nav-icon {
          font-size: 2rem;
          cursor: pointer;
        }
      }

      .navbar-list {
        display: ${openMenu ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        
        {/* Mobile navigation icons */}
        <div className="mobile-navbar-btn">
          {openMenu ? (
            <CgCloseR className="mobile-nav-icon" onClick={() => setOpenMenu(false)} />
          ) : (
            <CgMenu className="mobile-nav-icon" onClick={() => setOpenMenu(true)} />
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
