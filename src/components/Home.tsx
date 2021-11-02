import React, { Fragment } from "react";
import Logo from "../img/Marvel_Logo.svg.png";
import Profile from "../img/icons/profile.png";

export default function Home() {
  return (
    <section id="home">
      <section className="container">
        <nav className="navbar">
          <ul>
            <li><a href="#"><img src={Logo} className="logo" alt="logo" /></a></li>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV SHOWS</a></li>
            <li><a href="#"><img src={Profile} className="Profile" alt="Profile" /></a></li>
          </ul>
        </nav>
        <div className="left-side">side-text</div>
        <div className="right-side"></div>
      </section>
    </section>
  );
}
