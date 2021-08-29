import React from "react";
import Movie from "./Movie";

const MovieList = () => {
  const movieListSummary = [
    {
      name: "Fast and Furious",
      summary:
        "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
      source: "https://www.imdb.com/title/tt0232500/plotsummary",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg",
      id: 1,
    },
    {
      name: "Enter the Dragon",
      summary:
        "A secret agent comes to an opium lord's island fortress with other fighters for a martial-arts tournament.",
      source: "https://www.imdb.com/title/tt0070034/?ref_=fn_al_tt_1",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/e/ef/Enter_the_dragon.jpg",
      id: 2,
    },
    {
      name: "Toy Story",
      summary:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      source: "https://www.imdb.com/title/tt0114709/?ref_=fn_al_tt_1",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      id: 3,
    },
    {
      name: "Blade Runner",
      summary:
        "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      source: "https://www.imdb.com/title/tt0083658/?ref_=fn_al_tt_1",
      movieImage:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png",
      id: 4,
    },
  ];

  return (
    <div className="movieList">
      {movieListSummary.map((item) => {
        return (
          <div key={item.id}>
            <Movie
              title={item.name}
              summary={item.summary}
              Img={item.movieImage}
              source={item.source}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
