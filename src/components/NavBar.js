import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
        <div className="navbar">
          <NavLink style={{margin: "5px"}} to="/"> Home </NavLink>
          <NavLink style={{margin: "5px"}}to="/movies"> Movies </NavLink>
          <NavLink style={{margin: "5px"}} to="/directors"> Directors </NavLink>
          <NavLink style={{margin: "5px"}} to="/actors"> Actors </NavLink>
        </div>
         )
}

export default NavBar;
