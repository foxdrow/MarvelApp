import React, { useEffect, useState, useRef } from "react";
import apiKey from "../../utils/getApiKey";
import { Redirect, useLocation } from "react-router-dom";

export default function ComicsList() {
  const [comics, setComics] = useState<Array<any>>([]);
  const [comicsTotal, setComicsTotal] = useState<string>("loading");
  const [comicsParams, setComicsParams] = useState({
    titleStartsWith: "",
    orderBy: "title",
    limit: 42,
    offset: 0,
    format: "comic",
    issueNumber: "",
    characters: "",
  });
  const [orderByTextButton, setOrderByTextButton] = useState("A-Z");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [redirect, setRedirect] = useState("");

  const comicsListRef: React.MutableRefObject<any> = useRef();

  const recoveryComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/comics?${
        comicsParams.format && `&format=${comicsParams.format}`
      }${
        comicsParams.issueNumber && `&issueNumber=${comicsParams.issueNumber}`
      }${comicsParams.characters && `&characters=${comicsParams.characters}`}${
        comicsParams.titleStartsWith &&
        `&titleStartsWith=${comicsParams.titleStartsWith}`
      }&orderBy=${comicsParams.orderBy}&limit=${comicsParams.limit}&offset=${
        comicsParams.offset
      }${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryComics().then((data) => {
      setComics(data.results);
      setComicsTotal(data.total);
      if (Object.keys(data.results).length < 42) {
        setNextBtnDisabled(true);
      }
    });
  }, [comicsParams]);

  let comicsList;
  if (comics) {
    comicsList = comics.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div
          onClick={() => setRedirect(`/comics/${data.id}`)}
          key={data.id}
          className="comics-card"
        >
          <img src={ImgPath} />
          <div className="comics-card_bot">
            <h4 className="heading-4 comic-name">{data.title}</h4>
          </div>
        </div>
      );
    });
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    setComicsParams({
      ...comicsParams,
      titleStartsWith: e.target.title.value,
      offset: 0,
      issueNumber: e.target.issue.value,
      characters: e.target.characters.value,
    });
  };

  const handleOrderBy = (e: any) => {
    e.preventDefault();
    comicsParams.orderBy === "title"
      ? setComicsParams({ ...comicsParams, orderBy: "-title" })
      : setComicsParams({ ...comicsParams, orderBy: "title" });
    orderByTextButton === "A-Z"
      ? setOrderByTextButton("Z-A")
      : setOrderByTextButton("A-Z");
  };

  const onClickNextButton = () => {
    setComicsParams({
      ...comicsParams,
      offset: comicsParams.offset + 42,
    });
    comicsListRef.current.scrollIntoView();
  };

  const onClickPrevButton = () => {
    if (comicsParams.offset >= 42) {
      setComicsParams({
        ...comicsParams,
        offset: comicsParams.offset - 42,
      });
      comicsListRef.current.scrollIntoView();
    }
  };

  if (redirect && redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  }
  return (
    <section className="comics-list" ref={comicsListRef}>
      <h2 className="heading-2">MARVEL COMICS LIST</h2>
      <div className="comics-list-searching">
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="text" name="title" placeholder="TITLE" />
          <input type="text" name="issue" placeholder="ISSUE NO" />
          <input type="text" name="characters" placeholder="CHARACTERS ID" />
          <button style={{"display":"none"}}></button>
        </form>
        <div className="left-border"></div>
        <p>{comicsTotal}</p>
        <div className="orderBy">
          <p className="orderBy_label">SORT BY</p>
          <button
            className="orderBy_btn"
            value={comicsParams.orderBy}
            onClick={(e) => handleOrderBy(e)}
          >
            {orderByTextButton}
          </button>
        </div>
      </div>
      <div className="comics-list_gallery">{comicsList}</div>
      <div className="comics-list_pagination">
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
