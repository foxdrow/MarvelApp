export default function ComicBanner(props: any) {
  return (
    <section className="comic-banner">
      <img src={props.imgPath} alt="" />
      <h1 className="heading-1">{props.title}</h1>
    </section>
  );
}
