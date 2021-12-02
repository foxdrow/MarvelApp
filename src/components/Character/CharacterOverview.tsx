export default function CharacterOverview(props: any) {
  return (
    <section className="character-overview">
      <div className="character-overview_left">
        <h2 className="heading-2">Biography</h2>
      </div>
      <div className="character-overview_right">
        <div className="character-overview_right-item">
          <h3 className="heading-3">Character ID :</h3>
          <p>{props.id}</p>
        </div>
        <div className="character-overview_right-item">
          <h3 className="heading-3">Description :</h3>
          <p>
            {!props.description &&
              `No description available for this character`}
            {props.description}
          </p>
        </div>
        <div className="character-overview_right-item">
          <a
            href={props.detail}
            target="_blank"
            className="character-overview-btn"
          >
            MORE DETAIL
          </a>
        </div>
      </div>
    </section>
  );
}
