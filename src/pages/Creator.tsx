import React, { useEffect, useState, useRef } from "react";
import CreatorBanner from "../components/Creator/CreatorBanner";
import CreatorComicsList from "../components/Creator/CreatorComicsList";
import CreatorOverview from "../components/Creator/CreatorOverview";
import Navbar from "../components/Navbar";
import apiKey from "../utils/getApiKey";

export default function Creator(props: any) {
  const id = props.match.params.id;
  const [creator, setCreator] = useState<any>({});
  const [creatorComics, setCreatorComics] = useState<any>();
  const [imgPath, setImagePath] = useState("");

  const recoveryCreator = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/creators/${id}?${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };
  const recoveryCreatorComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/creators/${id}/comics?format=comic&noVariants=true&orderBy=-onsaleDate&limit=21${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryCreator().then((data) => {
      console.log(data.results[0]);
      setCreator(data.results[0]);
      setImagePath(
        `${data.results[0].thumbnail.path}/standard_fantastic.${data.results[0].thumbnail.extension}`
      );
    });
  }, []);
  useEffect(() => {
    recoveryCreatorComics().then((data) => {
      setCreatorComics(data.results);
      console.log(data.results)
    });
  }, []);
  return (
    <section id="creator">
      <section className="container">
        <Navbar />
        <CreatorBanner
          imgPath={imgPath}
          name={`${creator.firstName} ${creator.lastName}`}
        />
        <CreatorOverview id={creator.id} />
        <CreatorComicsList comics={creatorComics} />
      </section>
    </section>
  );
}
