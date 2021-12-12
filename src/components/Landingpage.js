import React from "react";
import NavBar from ".//NavBar";
import HomeSection from "./HomeSection";
import note from "./images/nota.svg";
import SongList from "./SongList";
import { Navigate } from "react-router-dom";

const Landingpage = (props) => {
  let songs = props.songs;
  let favourites = props.favourites;
  return (
    <div>
      <NavBar />
      <HomeSection note={note} />
      <SongList
        songs={songs}
        AddOrRem={"Add to favourites"}
        heading={"All songs"}
        songlist={"songlist"}
      />
      <SongList
        songs={favourites}
        AddOrRem={"Remove from favourites"}
        heading={"Favourites"}
        songlist={"favourites"}
      />
    </div>
  );
};

export default Landingpage;
