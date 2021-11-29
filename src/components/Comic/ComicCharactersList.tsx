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
    <section className="comic-characters-list">
      <div className="comic-characters-list_left">
        <h2 className="heading-2">Characters</h2>
      </div>
      <div className="comic-characters-list_right">
        <div className="comic-characters-list_right_gallery">{charactersList}</div>
      </div>
      <div style={{"marginBottom": "10rem"}}></div>
    </section>
  );
}
