import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-secondary">
      <Navbar  light expand="md">
        <Link to="/picture"> HOME </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
             <Link to="/form"> FORM </Link>
            </NavItem>
          </Nav>
          <NavbarText className="h1 text-white">PHOTO ALBUM</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
