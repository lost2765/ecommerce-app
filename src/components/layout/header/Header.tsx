import React from "react";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import "rsuite/dist/rsuite.min.css";
import classes from "./header.module.scss";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={classes.header}>
      <Navbar appearance="inverse" {...props}>
        <Navbar.Brand  as={Link} className={classes.logo} href="/">
          AFEA
        </Navbar.Brand>
        <Nav   className={classes.navbarNav} pullRight>
          <Nav.Item eventKey="1" icon={<HomeIcon />}>
            Home
          </Nav.Item>
          <Nav.Menu title="Category">
            <Nav.Item eventKey="4">Company</Nav.Item>
            <Nav.Item eventKey="5">Team</Nav.Item>
            <Nav.Item eventKey="6">Contact</Nav.Item>
          </Nav.Menu>
          <Nav.Item eventKey="2">About</Nav.Item>
          <Nav.Item eventKey="3">Products</Nav.Item>
         
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
