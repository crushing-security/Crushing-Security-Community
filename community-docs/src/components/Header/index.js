import React from "react";
import { Link } from "@docusaurus/router";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/img/logo.svg" alt="Crushing Security Logo" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/docs">Documentation</Link>
        <Link to="/community">Community</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="https://crushingsecurity.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Site
        </a>
        <a
          href="https://community.crushingsecurity.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forum
        </a>
        <a
          href="https://newsletter.crushingsecurity.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsletter Signup
        </a>
      </nav>
    </header>
  );
}

export default Header;
