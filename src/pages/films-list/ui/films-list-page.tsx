import { useState, useEffect } from "react";
import { FilmOverview } from "./film-overview";
import { TailSpin } from "react-loader-spinner";
import { useFilmsList } from "../hooks/useFilmsList";



export function FilmsListPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const { films, isLoading, error } = useFilmsList();
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    let filtered = films;
    if (selectedGenre !== "All") {
      filtered = films.filter((film) => film.genre === selectedGenre);
    }
    setFilteredFilms(filtered);
  }, [selectedGenre]);
  return (
    <div className="bg-slate-900">
      <div className="bg-slate-900">
        <h1 className="ml-5 text-white text-xl">
          Choose genre:
          <select
            className="ml-5 text-black text-xl rounded-2xl bg-white/50"
            onChange={(event) => {
              setSelectedGenre(event.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="Triller">Triller</option>
            <option value="Drama">Drama</option>
            <option value="Scientific">Scientific</option>
            <option value="Horror">Horror</option>
          </select>
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 mt-10 justify-center min-h-svh">
        {isLoading && (
          <div>
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#999999"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {error && (
          <p className="text-red-500 text-xl">Error: {error}</p>
        )}
        {filteredFilms &&
          filteredFilms.map((film) => (
            <FilmOverview filmData={film} key={film.id}></FilmOverview>
          ))}
      </div>
    </div>
  );
}
