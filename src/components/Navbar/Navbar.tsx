import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [expandedNavbar, setexpandedNavbar] = useState(false);

  return (
    <nav className="main-nav">
      <a href="/" className="brand-name">
        daveClinton
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setexpandedNavbar(!expandedNavbar);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={"nav-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
