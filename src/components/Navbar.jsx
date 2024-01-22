import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentsCss.css";
const Navbar = () => {
  return (
    <div className="navlink">
      <NavLink to={"/"} style={{ color: "white", fontWeight: "600" }}>
        Home
      </NavLink>
      <NavLink to={"/add"} style={{ color: "white", fontWeight: "600" }}>
        Add Contact
      </NavLink>
      <NavLink to={"/edit"} style={{ color: "white", fontWeight: "600" }}>
        Edit Contact
      </NavLink>
      <NavLink to={"/details"} style={{ color: "white", fontWeight: "600" }}>
        Contact Details
      </NavLink>
    </div>
  );
};

export default Navbar;
