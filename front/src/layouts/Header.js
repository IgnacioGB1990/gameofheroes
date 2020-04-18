import React from "react";
import { Link } from "react-router-dom";
import { useUser, useUserLogout } from "../../lib/auth.api";
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'

export const Header = () => {
  const user = useUser();
  const handleLogout = useUserLogout();

  return (
    <>
      <Navbar className="navBar" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link className="navHome" to="/">Home</Link>
          {!user && (
            <>
              <Link className="navLogin" to="/auth/login">Login</Link>
              <Link className="navSignup" to="/auth/signup">Signup</Link>
            </>
          )}
          {user && (
            <>
              <Link className="navList" to="/list">Heroes</Link>
              {/* <Link className="navPrivate" to="/private">Private</Link> */}
              <Link className="navPortfolio" to="/portfolio">Portfolio</Link>

              <Link className="navLogout" to="/" onClick={handleLogout}>Logout</Link>
              <div className="userNav">{user.username}</div>
              {/* <img className="userImage" src={user.avatar} alt="User avatar"></img> */}
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};


