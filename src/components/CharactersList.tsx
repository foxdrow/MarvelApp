import React, { useEffect, useState } from "react";
import md5 from "md5";

const { REACT_APP_MARVEL_API_PUBLIC_KEY, REACT_APP_MARVEL_API_PRIVATE_KEY } =
  process.env;
export default function CharactersList() {
  const [characters, setCharacters] = useState<Array<string>>([]);

  const recoveryCharacters = async () => {
    const time = Date.now();
    const apiKey = `&apikey=${REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${md5(
      `${time}${REACT_APP_MARVEL_API_PRIVATE_KEY}${REACT_APP_MARVEL_API_PUBLIC_KEY}`
    )}&ts=${time}`;

    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=30${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  // useEffect(() => {
  //   recoveryCharacters().then((data) => {
  //     setCharacters(data.results);
  //   });
  // }, []);

  let charactersList;
  if (characters) {
    console.log(characters);
    charactersList = characters.map((data: any) => {
      return <div>{data.name}</div>;
    });
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>CharactersList</h1>
      <div style={{ color: "green" }}>{charactersList}</div>
    </div>
  );
}
