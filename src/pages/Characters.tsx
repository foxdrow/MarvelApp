import Navbar from "../components/Navbar";
import TitleBanner from "../components/Characters/TitleBanner";
import FeaturedCharacters from "../components/FeaturedCharacters";
import CharactersList from "../components/Characters/CharactersList";

export default function Characters() {
  return (
    <section id="characters">
      <section className="container">
        <Navbar />
        <TitleBanner/>
        {/* <FeaturedCharacters/> */}
        <CharactersList/>
      </section>
    </section>
  );
}
