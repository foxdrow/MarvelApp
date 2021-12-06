export default function CharacterBanner(props: any) {
  return (
    <section className="character-banner">
      <img src={props.imgPath} alt="" />
      <h1 className="heading-1">{props.name}</h1>
    </section>
  );
}
