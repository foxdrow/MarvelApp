import React, { useEffect, useState, useRef } from "react";
import apiKey from "../../utils/getApiKey";
import { Redirect, useLocation } from "react-router-dom";

export default function CreatorsList() {
  const [creators, setCreators] = useState<Array<any>>([]);
  const [creatorsTotal, setCreatorsTotal] = useState<string>("loading");
  const [creatorsParams, setCreatorsParams] = useState({
    nameStartsWith: "",
    orderBy: "firstName",
    limit: 42,
    offset: 0,
  });
  const [orderByTextButton, setOrderByTextButton] = useState("A-Z");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [redirect, setRedirect] = useState("");

  const creatorsListRef: React.MutableRefObject<any> = useRef();

  const recoveryCreators = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/creators?${
        creatorsParams.nameStartsWith &&
        `&nameStartsWith=${creatorsParams.nameStartsWith}`
      }&orderBy=${creatorsParams.orderBy}&limit=${
        creatorsParams.limit
      }&offset=${creatorsParams.offset}${apiKey}`
    );
    const data: any = await res.json();
    return data.data;
  };

  useEffect(() => {
    recoveryCreators().then((data) => {
      setCreators(data.results);
      setCreatorsTotal(data.total);
      if (Object.keys(data.results).length < 42) {
        setNextBtnDisabled(true);
      }
    });
  }, [creatorsParams]);

  let creatorsList;
  if (creators) {
    creatorsList = creators.map((data: any) => {
      const ImgPath = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
      return (
        <div onClick={() => setRedirect(`/creators/${data.id}`)} key={data.id} className="creators-card">
          <img src={ImgPath} />
          <div className="creators-card_bot">
            <h4 className="heading-4 creator-firstName">{data.firstName} {data.lastName}</h4>
          </div>
        </div>
      );
    });
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    setCreatorsParams({
      ...creatorsParams,
      nameStartsWith: e.target.search.value,
      offset: 0,
    });
  };

  const handleOrderBy = (e: any) => {
    e.preventDefault();
    creatorsParams.orderBy === "firstName"
      ? setCreatorsParams({ ...creatorsParams, orderBy: "-firstName" })
      : setCreatorsParams({ ...creatorsParams, orderBy: "firstName" });
    orderByTextButton === "A-Z"
      ? setOrderByTextButton("Z-A")
      : setOrderByTextButton("A-Z");
  };

  const onClickNextButton = () => {
    setCreatorsParams({
      ...creatorsParams,
      offset: creatorsParams.offset + 42,
    });
    creatorsListRef.current.scrollIntoView();
  };

  const onClickPrevButton = () => {
    if (creatorsParams.offset >= 42) {
      setCreatorsParams({
        ...creatorsParams,
        offset: creatorsParams.offset - 42,
      });
      creatorsListRef.current.scrollIntoView();
    }
  };

  if (redirect && redirect) {
    return <Redirect to={{ pathname: redirect }} />;
  }
  return (
    <section className="creators-list" ref={creatorsListRef}>
      <h2 className="heading-2">MARVEL CREATORS LIST</h2>
      <div className="creators-list-searching">
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="text" name="search" placeholder="SEARCH" />
        </form>
        <div className="left-border"></div>
        <p>{creatorsTotal}</p>
        <div className="orderBy">
          <p className="orderBy_label">SORT BY</p>
          <button
            className="orderBy_btn"
            value={creatorsParams.orderBy}
            onClick={(e) => handleOrderBy(e)}
          >
            {orderByTextButton}
          </button>
        </div>
      </div>
      <div className="creators-list_gallery">{creatorsList}</div>
      <div className="creators-list_pagination">
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
