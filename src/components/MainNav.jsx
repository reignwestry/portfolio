// import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Nav() {

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="mainNav">
      <button className="hamburger" onClick={handleOpen}>

        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* //NOTE navMenu */}
        <div className="navMenu">
      {open ? (
          <ul>
            <li>
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        ) : null}
        </div>
    </nav>
  );
}
