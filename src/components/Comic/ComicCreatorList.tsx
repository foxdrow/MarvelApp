import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function ComicCreatorList(props: any) {
  const [redirect, setRedirect] = useState("");
  if (redirect && redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  }
  let creatorsList;
  if (props.creators) {
    creatorsList = props.creators.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div
          onClick={() => setRedirect(`/creators/${data.id}`)}
          key={data.id}
          className="creators-card"
        >
          <img src={ImgPath} />
          <div className="creators-card_bot">
            <h4 className="heading-4 creator-name">{data.firstName} {data.lastName}</h4>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="comic-creators-list">
      <div className="comic-creators-list_left">
        <h2 className="heading-2">Creators</h2>
      </div>
      <div className="comic-creators-list_right">
        <div className="comic-creators-list_right_gallery">{creatorsList}</div>
      </div>
      <div style={{"marginBottom": "10rem"}}></div>
    </section>
  );
}
