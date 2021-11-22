import Navbar from "../components/Navbar";
import TitleBanner from "../components/Comics/TitleBanner";
import ComicsList from "../components/Comics/ComicsList";

export default function Comics() {
  return (
    <section id="comics">
      <section className="container">
        <Navbar />
        <TitleBanner/>
        <ComicsList/>
      </section>
    </section>
  );
}
