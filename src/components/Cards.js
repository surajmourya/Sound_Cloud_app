import React from "react";
import style from '.././styles/Cards.module.css'
import data from "../playlist.json";
import ".././styles/Form.css";
import Card from "./Card";
import { useState } from "react";
function Cards() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form className="main1">
        <input
          type="text"
          placeholder="type for search a song"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </form>
      <div className={[style.cardsWrapper, "custom_scrollBar"].join(" ")}>
        {data
          .filter((dat) =>
            dat.user.username.toLowerCase().includes(search.toLowerCase())
          )
          .map((cardDetail) => (
            <Card key={cardDetail.id} data={cardDetail} />
          ))}
      </div>
    </div>
  );
}

export default Cards;

