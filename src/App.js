import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [songs, setSongs] = useState([
    {
      Title: "Dude, Where's My Car?",
      Year: "2000",
      imdbID: "tt0242423",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzRmN2NjNzktOWE1My00NjVlLWFhNjYtZmFkMzM5YTA2ZTFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Car",
      Year: "1977",
      imdbID: "tt0075809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2M2ZThjNjItZmQ5My00ODczLWEwYzAtMTMxODBlY2RmMjQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Cop Car",
      Year: "2015",
      imdbID: "tt3813310",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTMyMDc5OTUwMl5BMl5BanBnXkFtZTgwMjEwNjc3NTE@._V1_SX300.jpg",
    },
    {
      Title: "Mike's New Car",
      Year: "2002",
      imdbID: "tt0323250",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdlNGQyODMtMjE1My00NTJlLTljMzYtZDNlYjA1YjMxYTI3XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
    },
    {
      Title: "Who Killed the Electric Car?",
      Year: "2006",
      imdbID: "tt0489037",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc1MTM0MTA2N15BMl5BanBnXkFtZTcwMTk1OTIzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Car",
      Year: "1977",
      imdbID: "tt0075809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2M2ZThjNjItZmQ5My00ODczLWEwYzAtMTMxODBlY2RmMjQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  ]);

  const [favourites, setFavourites] = useState([
    {
      Title: "Dude, Where's My Car?",
      Year: "2000",
      imdbID: "tt0242423",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzRmN2NjNzktOWE1My00NjVlLWFhNjYtZmFkMzM5YTA2ZTFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Car",
      Year: "1977",
      imdbID: "tt0075809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2M2ZThjNjItZmQ5My00ODczLWEwYzAtMTMxODBlY2RmMjQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Cop Car",
      Year: "2015",
      imdbID: "tt3813310",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTMyMDc5OTUwMl5BMl5BanBnXkFtZTgwMjEwNjc3NTE@._V1_SX300.jpg",
    },
    {
      Title: "Mike's New Car",
      Year: "2002",
      imdbID: "tt0323250",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdlNGQyODMtMjE1My00NTJlLTljMzYtZDNlYjA1YjMxYTI3XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
    },
    {
      Title: "Who Killed the Electric Car?",
      Year: "2006",
      imdbID: "tt0489037",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc1MTM0MTA2N15BMl5BanBnXkFtZTcwMTk1OTIzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Car",
      Year: "1977",
      imdbID: "tt0075809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2M2ZThjNjItZmQ5My00ODczLWEwYzAtMTMxODBlY2RmMjQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="landingpage"
            element={() => (
              <Landingpage
                songs={songs}
                setSongs={setSongs}
                favourites={favourites}
              />
            )}
          />
        </Routes>
      </Router> */}

      <Landingpage songs={songs} favourites={favourites} />
    </div>
  );
}

export default App;
