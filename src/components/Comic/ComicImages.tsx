import React from "react";

export default function ComicImages(props: any) {
  let imagesList;
  if (props.images) {
    imagesList = props.images.map((data: any) => {
      const ImgPath = `${data.path}/portrait_uncanny.${data.extension}`;
      return (
        <div key={data.path} className="image-card">
          <img src={ImgPath} />
        </div>
      );
    });
  }
  return (
    <section className="comic-images">
      <div className="comic-images_left">
        <h2 className="heading-2">Gallery</h2>
      </div>
      <div className="comic-images_right">
      <div>{imagesList}</div>
      </div>
    </section>
  );
}
