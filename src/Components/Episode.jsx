import React from "react";
import Styles from "./Styles.css";
import Character from "./Character.jsx";

const Episode = props => {
  const { characters, title, image, episode_id } = props.episode;
  const { changeBoolean } = props;

  return (
    <div
      className="Episode"
      onClick={() => changeBoolean(props.episode.episode_id)}
    >
      <div className="Image">
        <img className="Caratula" src={image} />
        <div className="InfoImage">
          <h5>{title}</h5>
          <p>Episode:{episode_id}</p>
        </div>
      </div>
    </div>
  );
};
export default Episode;
