import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark">
          <li>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </li>

          <li className="ml-auto">
            <Link href="/signin">
              <a className="nav-link">Sign In</a>
            </Link>
          </li>

          <li>
            <Link href="/signup">
              <a className="nav-link"> Sign Up</a>
            </Link>
          </li>
        </div>
      </header>
      <div>{children}</div>
    </>
  );
}

// export default Layout;
