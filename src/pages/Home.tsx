import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Home() {
  const [redirect, setRedirect] = useState("");

  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  } else if (redirect) window.location.reload();
  return (
    <section id="home">
      <section className="container">
        <Navbar />
        <div className="left-side">
          <h1 className="heading-1">SPIDER-MAN</h1>
          <p>
            Bitten by a radioactive spider, high school student Peter Parker
            gained the speed, strength and powers of a spider. Adopting the name
            Spider-Man, Peter hoped to start a career using his new abilities.
            Taught that with great power comes great responsibility, Spidey has
            vowed to use his powers to help people.
          </p>
          <div className="btn-box">
            <button
              onClick={() => setRedirect(`/characters/1009610`)}
              className=" btn btn_red"
            >
              More Information
            </button>
          </div>
        </div>
        <div className="right-side"></div>
      </section>
    </section>
  );
}
