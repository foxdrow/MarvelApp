import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section id="home">
      <section className="container">
        <Navbar />
        <div className="left-side">
          <h1 className="heading-1">SPIDER-MAN</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam
          </p>
          <div className="btn-box">
            <button className=" btn btn_red">More Information</button>
          </div>
        </div>
        <div className="right-side"></div>
      </section>
    </section>
  );
}
