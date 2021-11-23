import CreatorsList from "../components/Creators/CreatorsList";
import TitleBanner from "../components/Creators/TitleBanner";
import Navbar from "../components/Navbar";

export default function Creators() {
  return (
    <section id="creators">
      <section className="container">
          <Navbar/>
          <TitleBanner/>
          <CreatorsList/>
      </section>
    </section>
  );
}
