import React from "react";

export default function CharacterGallery(props: any) {
  return (
    <section className="character-gallery">
      <div className="character-gallery_left">
        <h2 className="heading-2">Gallery</h2>
      </div>
      <div className="character-gallery_right">
          <img src={props.images}/>
      </div>
    </section>
  );
}