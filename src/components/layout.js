import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <strong>Home</strong>
                    </Link>
                </div>
                <Link className="navbar-item" to="/about/">
                    About
                </Link>
            </nav>
            <main className="container content">{children}</main>
        </div>
    );
};

export default Layout;
