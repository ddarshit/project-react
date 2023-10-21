import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand>DD</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current="page">
                <Link to="home">Home</Link>
              </MDBNavbarLink>
              <MDBNavbarLink>
                <Link to="login">Login</Link>
              </MDBNavbarLink>
              <MDBNavbarLink>
                <Link to="register">Register</Link>
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Outlet/>
    </>
  );
}
