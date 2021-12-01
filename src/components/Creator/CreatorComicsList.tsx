import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function CreatorComicsList(props: any) {
  const [redirect, setRedirect] = useState("");
  if (redirect && redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  }
  let comicsList;
  if (props.comics) {
    comicsList = props.comics.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div
          onClick={() => setRedirect(`/comics/${data.id}`)}
          key={data.id}
          className="comics-card"
        >
          <img src={ImgPath} />
          <div className="comics-card_bot">
            <h4 className="heading-4 creator-name">{data.title}</h4>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="creator-comics-list">
      <div className="creator-comics-list_left">
        <h2 className="heading-2">Bibliography</h2>
      </div>
      <div className="creator-comics-list_right">
        <div className="creator-comics-list_right_gallery">{comicsList}</div>
      </div>
      <div style={{"marginBottom": "10rem"}}></div>
    </section>
  );
}