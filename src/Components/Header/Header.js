import "./Header.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useAuth from "../../Hooks/useAuth";
const { Navbar, Container, Nav } = require("react-bootstrap");
const { HashLink } = require("react-router-hash-link");

const Header = () => {
  const { user, logOut } = useAuth();
  const [name, setName] = useState("");

  console.log(user);
  useEffect(() => {
    setName(user.displayName);
    console.log(user.displayName);
  }, [user.displayName]);
  // console.log(user);
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">BikersBD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#blogs">
              blogs
            </Nav.Link>

            <Nav.Link as={HashLink} to="/dashboard">
              Dashboard
            </Nav.Link>

            <Navbar.Text className="mx-3"> {name}</Navbar.Text>
            {user?.displayName ? (
              <button
                className="btn btn-primary"
                onClick={logOut}
                variant="light"
              >
                Log Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
