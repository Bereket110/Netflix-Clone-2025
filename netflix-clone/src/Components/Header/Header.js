import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/netflix-clo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      // className="nav__black "
      // className={`header_outer_container ${show && "nav__black"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="button" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
            <Nav.Link href="#languages">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#search">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#notifications">
              <NotificationsNoneIcon />
            </Nav.Link>
            <Nav.Link href="#account">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#dropdown">
              <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
