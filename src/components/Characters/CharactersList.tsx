import React, { useEffect, useState, FormEvent } from "react";
import md5 from "md5";

const { REACT_APP_MARVEL_API_PUBLIC_KEY, REACT_APP_MARVEL_API_PRIVATE_KEY } =
  process.env;
export default function CharactersList() {
  const [characters, setCharacters] = useState<Array<any>>([]);
  const [charactersTotal, setCharactersTotal] = useState<string>("loading");

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
  //     setCharactersTotal(data.total);
  //   });
  // }, []);

  let charactersList;
  if (characters) {
    if (characters[0]) {
    }
    charactersList = characters.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/portrait_xlarge.${data.thumbnail.extension}`;
      return (
        <div>
          <div>{data.name}</div>
          <img src={ImgPath} />
        </div>
      );
    });
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    console.log(e.target.search.value)
  }

  return (
    <section className="characters-list">
      <h2 className="heading-2">MARVEL CHARACTERS LIST</h2>
      <div className="characters-list-searching">
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="text" name="search" placeholder="SEARCH" />
        </form>
        <div className="left-border"></div>
        <p>{charactersTotal}</p>

      </div>
      <div>{charactersList}</div>
    </section>
  );
}
