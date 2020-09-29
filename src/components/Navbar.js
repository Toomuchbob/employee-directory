import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2"
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                    type={props.type}
                    placeholder={props.placeholder}
                    
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
