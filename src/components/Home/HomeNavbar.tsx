import React, { useState } from "react";
import Logo from "../../img/Marvel_Logo.svg.png";
import Profile from "../../img/icons/profile.png";
import { Redirect, useLocation } from "react-router-dom";

export default function HomeNavbar(props: any) {
  const [redirect, setRedirect] = useState("");
  const location = useLocation();

  if (redirect && redirect !== location.pathname) {
    return <Redirect to={{ pathname: redirect }} />;
  } else if (redirect) window.location.reload();

  return (
    <nav id="home-navbar">
      <ul>
        <li>
          <a onClick={() => setRedirect(`/`)}>
            <img src={Logo} className="logo" alt="logo" />
          </a>
        </li>
        <li>
          <a onClick={() => setRedirect(`/characters`)}>
            CHARACTERS
          </a>
        </li>
        <li>
          <a onClick={() => setRedirect(`/comics`)}>COMICS</a>
        </li>
        <li>
          <a onClick={() => setRedirect(`/creators`)}>CREATORS</a>
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
