import React, { useEffect, useState } from "react";
import md5 from "md5";
import Navbar from "../components/Navbar";

export default function Characters() {
  const [characters, setCharacters] = useState<Array<string>>([]);

  const recoveryCharacters = async () => {
    const time = Date.now();
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=30&apikey=44e5e6b6ce77ed521d676cb659e47ba0&hash=${md5(
        `${time}315439962b7c961638fe4b4276398956e57ca45b44e5e6b6ce77ed521d676cb659e47ba0`
      )}&ts=${time}`
    );
    const data: any = await res.json();
    return data.data;
  };
  useEffect(() => {
    recoveryCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  let charactersList;
  if (characters) {
    console.log(characters);
    charactersList = characters.map((data: any) => {
      return <div>{data.name}</div>;
    });
  }
  // useEffect(() => {
  //   console.log(characters);
  // }, [characters]);

  return (
    <div>
      <h1 style={{ color: "red" }}>Characters</h1>
      <div style={{ color: "green" }}>{charactersList}</div>
    </div>
  );
}
