import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Menu from "../Menu";

function Header() {
  return (
    <div className="main">
      <Nav
        className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
        activeKey=""
        onSelect={(selectedKey: any) => alert(`selected ${selectedKey}`)}
      >
        <Link to="#" className="navbar-brand col-sm-3 col-md-2 mr-0">
          Pokemon React
        </Link>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <Navbar className="navbar-nav px-3">
          <Nav.Link href="#logout">Sign out</Nav.Link>
        </Navbar>
      </Nav>
    </div>
  );
}
export default Header;
