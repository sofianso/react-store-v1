import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <div>
        <div className="links">
          <Link to="/" className="pl-8">
            NEXUS BAKERY
          </Link>

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* hides the menu bar if on smaller screen like tablets */}
          <div className="pr-8 md:block hidden">
            <Link className="p-4" to="/menu">
              Menu
            </Link>
            <Link className="p-4" to="/about">
              About
            </Link>
            <Link className="p-4" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
