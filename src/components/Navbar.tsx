import React, { useState } from "react";
import Logo from "../img/Marvel_Logo.svg.png";
import Profile from "../img/icons/profile.png";
import { Redirect, useLocation } from "react-router-dom";

export default function Navbar(props: any) {
  const [redirect, setRedirect] = useState("");
  const location = useLocation();

  if (redirect && redirect !== location.pathname) {
    return <Redirect to={{ pathname: redirect }} />;
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a onClick={() => setRedirect(`/`)}>
            <img src={Logo} className="logo" alt="logo" />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setRedirect(`/characters`)}>
            CHARACTERS
          </a>
        </li>
        <li>
          <a href="#">COMICS</a>
        </li>
        <li>
          <a href="#">MOVIES</a>
        </li>
        <li>
          <a href="#">TV SHOWS</a>
        </li>
        <li>
          <a href="#">
            <img src={Profile} className="Profile" alt="Profile" />
          </a>
        </li>
      </ul>
    </nav>
  );
}