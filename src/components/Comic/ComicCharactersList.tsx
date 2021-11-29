import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function ComicCharactersList(props: any) {
  const [redirect, setRedirect] = useState("");
  if (redirect && redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  }
  let charactersList;
  if (props.characters) {
    charactersList = props.characters.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div
          onClick={() => setRedirect(`/characters/${data.id}`)}
          key={data.id}
          className="characters-card"
        >
          <img src={ImgPath} />
          <div className="characters-card_bot">
            <h4 className="heading-4 character-name">{data.name}</h4>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="characters-list">
      <div className="characters-list_gallery">{charactersList}</div>
    </section>
  );
}
