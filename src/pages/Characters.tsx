import React from "react";
import Navbar from "../components/Navbar";
import CharactersList from "../components/Characters/CharactersList";
import TitleBanner from "../components/Characters/TitleBanner";

export default function Characters() {
  return (
    <section id="characters">
      <section className="container">
        <Navbar />
        <TitleBanner/>
      </section>
    </section>
  );
}
