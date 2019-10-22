import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <Nav className="mr-auto">
      <NavLink to="/pokedex">Pokedex</NavLink>>
    </Nav>
  );
}
export default Menu;
