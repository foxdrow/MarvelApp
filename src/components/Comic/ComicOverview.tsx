export default function ComicOverview(props: any) {
  return (
    <section className="comic-overview">
      <div className="comic-overview_left">
        <h2 className="heading-2">Overview</h2>
      </div>
      <div className="comic-overview_right">
        <div className="comic-description comic-overview_right-item">
          <h3 className="heading-3">Description :</h3>
          <p>{props.description}</p>
        </div>
        <div className="comic-id comic-overview_right-item">
          <h3 className="heading-3">Comic ID :</h3>
          <p>{props.id}</p>
        </div>
        <div className="comic-overview_right-item">
          <h3 className="heading-3">Pages Count :</h3>
          <p>{props.pages}</p>
        </div>
        <div className="comic-overview_right-item">
          <h3 className="heading-3">Issue No :</h3>
          <p>{props.issueNumber}</p>
        </div>
        <div className="comic-overview_right-item">
          <h3 className="heading-3">Release date :</h3>
          <p>{props.date}</p>
        </div>
      </div>
    </section>
  );
}
