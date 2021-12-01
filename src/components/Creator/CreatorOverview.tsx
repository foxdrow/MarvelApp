export default function CreatorOverview(props: any) {
  return (
    <section className="creator-overview">
      <div className="creator-overview_left">
        <h2 className="heading-2">Biography</h2>
      </div>
      <div className="creator-overview_right">
        <div className="creator-overview_right-item">
          <h3 className="heading-3">Creator ID :</h3>
          <p>{props.id}</p>
        </div>
        <div className="creator-overview_right-item">
          <h3 className="heading-3">Description :</h3>
          <p>
            {!props.description && `No description available for this creator`}
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
}
