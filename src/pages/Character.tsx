import React, { useEffect, useState, useRef } from "react";
import apiKey from "../utils/getApiKey";

export default function Character(props: { match: any }) {
  const id = props.match.params.id;
  const [character, setCharacter] = useState<any>({});
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
    });
  }, []);
  return (
      <section id="character">
          <h1>{character.name}</h1>
          <p>{character.description}</p>
      </section>
  )
}
