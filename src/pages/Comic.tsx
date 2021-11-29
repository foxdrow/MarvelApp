import React, { useEffect, useState, useRef } from "react";
import ComicBanner from "../components/Comic/ComicBanner";
import ComicCharactersList from "../components/Comic/ComicCharactersList";
import ComicOverview from "../components/Comic/ComicOverview";
import Navbar from "../components/Navbar";
import apiKey from "../utils/getApiKey";

export default function Comic(props: { match: any }) {
  const id = props.match.params.id;
  const [comic, setComic] = useState<any>({});
  const [comicCharacters, setComicCharacters] = useState<any>();
  const [imgPath, setImagePath] = useState("");
  const [date, setDate] = useState("");
  const recoveryComicCharacters = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/comics/${id}/characters?${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };
  const recoveryComic = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/comics/${id}?${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryComic().then((data) => {
      console.log(data.results[0]);
      setComic(data.results[0]);
      setImagePath(
        `${data.results[0].thumbnail.path}/standard_fantastic.${data.results[0].thumbnail.extension}`
      );
      setDate(data.results[0].dates[0].date.slice(0, 10));
    });
  }, []);
  useEffect(() => {
    recoveryComicCharacters().then((data) => {
      console.log(data.results);
      setComicCharacters(data.results);
    });
  }, []);
  return (
    <section id="comic">
      <section className="container">
        <Navbar />
        <ComicBanner imgPath={imgPath} title={comic.title} />
        <ComicOverview
          description={comic.description}
          id={comic.id}
          date={date}
          images={comic.images}
          issueNumber={comic.issueNumber}
          pages={comic.pageCount}
          prices={comic.prices}
          series={comic.series}
        />
        <ComicCharactersList characters={comicCharacters} />
      </section>
    </section>
  );
}
