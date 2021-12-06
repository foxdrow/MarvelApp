import React, { useEffect, useState, useRef } from "react";
import CharacterBanner from "../components/Character/CharacterBanner";
import CharacterComicsList from "../components/Character/CharacterComicsList";
import CharacterOverview from "../components/Character/CharacterOverview";
import CharacterGallery from "../components/Characters/CharacterGallery";
import Navbar from "../components/Navbar";
import apiKey from "../utils/getApiKey";

export default function Character(props: { match: any }) {
  const id = props.match.params.id;
  const [character, setCharacter] = useState<any>({});
  const [characterComics, setCharacterComics] = useState<any>();
  const [imgPath, setImagePath] = useState("");
  const [images, setImages] = useState("");
  const [detailUrl, setDetailUrl] = useState("")
  const recoveryCharacter = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };
  const recoveryCharacterComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?format=comic&noVariants=true&orderBy=-onsaleDate&limit=21${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryCharacter().then((data) => {
      setCharacter(data.results[0]);
      setImagePath(
        `${data.results[0].thumbnail.path}/standard_fantastic.${data.results[0].thumbnail.extension}`
      );
      setImages(
        `${data.results[0].thumbnail.path}/portrait_uncanny.${data.results[0].thumbnail.extension}`
      );
      setDetailUrl(data.results[0].urls[0].url);
    });
  }, []);
  useEffect(() => {
    recoveryCharacterComics().then((data) => {
      setCharacterComics(data.results);
    });
  }, []);
  return (
    <section id="character">
      <section className="container">
        <Navbar />
        <CharacterBanner imgPath={imgPath} name={character.name} />
        <CharacterOverview
          description={character.description}
          id={character.id}
          detail={detailUrl}
        />
        <CharacterGallery images={images} />
        <CharacterComicsList comics={characterComics} />
      </section>
    </section>
  );
}
