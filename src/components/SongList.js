import React, { useState } from "react";
import Heading from "./Heading";
import Favouritestab from "./Favouritestab";

const SongList = (props) => {
  const AddOrRem = props.AddOrRem;
  const heading = props.heading;
  return (
    <section className="songlist pt-4 {props.songlist}">
      <Heading heading={heading} />
      <div className="container-fluid p-3">
        <div className="row text-center g-3">
          {props.songs.map((song, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="card d-flex flex-column h-100 bg-light text-dark">
                <div className="card-body h-100 d-flex flex-column">
                  <img
                    className="card-img-top"
                    src={song.Poster}
                    alt="songcover"
                  ></img>
                  <h4 className="card-title mb-2">
                    <b>{song.Title}</b>
                  </h4>
                  <div className="imgcont"></div>
                  <div>
                    <p className="card-text">
                      {song.Year},{song.Type}
                    </p>
                  </div>
                </div>
                <div
                  className="card-footer"
                  onClick={() => props.handleAddRemove(song)}
                >
                  <Favouritestab AddOrRem={AddOrRem} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongList;
