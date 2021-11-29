import React, { useEffect, useState, useRef } from "react";
import CharacterBanner from "../components/Character/CharacterBanner";
import CharacterOverview from "../components/Character/CharacterOverview";
import CharacterGallery from "../components/Characters/CharacterGallery";
import Navbar from "../components/Navbar";
import apiKey from "../utils/getApiKey";

export default function Character(props: { match: any }) {
  const id = props.match.params.id;
  const [character, setCharacter] = useState<any>({});
  const [imgPath, setImagePath] = useState("");
  const [images, setImages] = useState("");
  const recoveryCharacters = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryCharacters().then((data) => {
      console.log(data.results[0]);
      setCharacter(data.results[0]);
      setImagePath(
        `${data.results[0].thumbnail.path}/standard_fantastic.${data.results[0].thumbnail.extension}`
      );
      setImages(
        `${data.results[0].thumbnail.path}/portrait_uncanny.${data.results[0].thumbnail.extension}`
      );
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
        />
        <CharacterGallery images={images}/>
      </section>
    </section>
  );
}
