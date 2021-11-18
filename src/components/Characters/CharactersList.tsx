import React, { useEffect, useState, useRef } from "react";
import apiKey from "../../utils/getApiKey";

export default function CharactersList() {
  const [characters, setCharacters] = useState<Array<any>>([]);
  const [charactersTotal, setCharactersTotal] = useState<string>("loading");
  const [charactersParams, setCharactersParams] = useState({
    nameStartsWith: "",
    orderBy: "name",
    limit: 42,
    offset: 0,
  });
  const [orderByTextButton, setOrderByTextButton] = useState("A-Z");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const charactersListRef: React.MutableRefObject<any> = useRef();

  const recoveryCharacters = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?${
        charactersParams.nameStartsWith &&
        `&nameStartsWith=${charactersParams.nameStartsWith}`
      }&orderBy=${charactersParams.orderBy}&limit=${
        charactersParams.limit
      }&offset=${charactersParams.offset}${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryCharacters().then((data) => {
      setCharacters(data.results);
      setCharactersTotal(data.total);
      console.log(Object.keys(data.results).length);
      if (Object.keys(data.results).length < 42) {
        setNextBtnDisabled(true);
      }
    });
  }, [charactersParams]);

  let charactersList;
  if (characters) {
    console.log(characters[0])
    charactersList = characters.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div key={data.id} className="characters-card">
          <img src={ImgPath} />
          <div className="characters-card_bot">
            <h4 className="heading-4 character-name">{data.name}</h4>
          </div>
        </div>
      );
    });
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    setCharactersParams({
      ...charactersParams,
      nameStartsWith: e.target.search.value,
      offset: 0,
    });
  };

  const handleOrderBy = (e: any) => {
    e.preventDefault();
    charactersParams.orderBy === "name"
      ? setCharactersParams({ ...charactersParams, orderBy: "-name" })
      : setCharactersParams({ ...charactersParams, orderBy: "name" });
    orderByTextButton === "A-Z"
      ? setOrderByTextButton("Z-A")
      : setOrderByTextButton("A-Z");
  };

  const onClickNextButton = () => {
    setCharactersParams({
      ...charactersParams,
      offset: charactersParams.offset + 42,
    });
    charactersListRef.current.scrollIntoView();
  };

  const onClickPrevButton = () => {
    if (charactersParams.offset >= 42) {
      setCharactersParams({
        ...charactersParams,
        offset: charactersParams.offset - 42,
      });
      charactersListRef.current.scrollIntoView();
    }
  };

  return (
    <section className="characters-list" ref={charactersListRef}>
      <h2 className="heading-2">MARVEL CHARACTERS LIST</h2>
      <div className="characters-list-searching">
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="text" name="search" placeholder="SEARCH" />
        </form>
        <div className="left-border"></div>
        <p>{charactersTotal}</p>
        <div className="orderBy">
          <p className="orderBy_label">SORT BY</p>
          <button
            className="orderBy_btn"
            value={charactersParams.orderBy}
            onClick={(e) => handleOrderBy(e)}
          >
            {orderByTextButton}
          </button>
        </div>
      </div>
      <div className="characters-list_gallery">{charactersList}</div>
      <div className="characters-list_pagination">
        <button className="btn btn_prev" onClick={(e) => onClickPrevButton()}>
          Prev
        </button>
        <button
          disabled={nextBtnDisabled}
          className="btn btn_next"
          onClick={(e) => onClickNextButton()}
        >
          Next
        </button>
      </div>
    </section>
  );
}
