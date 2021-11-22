export default function CharacterOverview(props: any) {
  return (
    <section className="character-overview">
      <div className="character-overview_left">
        <h2 className="heading-2">Biography</h2>
      </div>
      <div className="character-overview_right">
        <p className="character-description">{props.description}</p>
      </div>
    </section>
  );
}
