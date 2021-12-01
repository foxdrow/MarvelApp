export default function CreatorBanner(props: any) {
  return (
    <section className="creator-banner">
      <img src={props.imgPath} alt="" />
      <h1 className="heading-1">{props.name}</h1>
    </section>
  );
}
