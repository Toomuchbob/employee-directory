import React from "react";

const Navbar = ({brand}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{brand}</span>
        </nav>
    );
};

export default Navbar;
