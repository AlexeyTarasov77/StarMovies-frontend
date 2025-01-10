import { useState, useEffect } from "react";
import { FilmOverview } from "./film-overview";
import { TailSpin } from "react-loader-spinner";
import { useFilmsList, useGenres } from "../hooks";



export function FilmsListPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const { films, setFilms, isLoading: isFilmsLoading, error: filmsError } = useFilmsList();
  const { genres, isLoading: isGenresLoading, error: genresError } = useGenres();
  const isLoading = isFilmsLoading || isGenresLoading;
  const error = filmsError || genresError;

  useEffect(() => {
    let filtered = films;
    if (selectedGenre !== "All") {
      filtered = films.filter((film) => film.genre === selectedGenre);
    }
    setFilms(filtered);
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
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
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
        {films &&
          films.map((film) => (
            <FilmOverview filmData={film} key={film.id}></FilmOverview>
          ))}
      </div>
    </div>
  );
}
