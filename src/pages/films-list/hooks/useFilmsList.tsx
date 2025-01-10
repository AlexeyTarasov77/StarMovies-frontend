import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../../app/constants";
export interface IMovie {
  id: number;
  name: string;
  genres: string[];
  coverUrl: string;
  country: string;
  releaseDate: Date;
}
export function useFilmsList() {

  const [films, setFilms] = useState<IMovie[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<IMovie[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchFilms() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${BACKEND_URL}/api/v1/movies/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch films");
        }
        const filmsData: IMovie[] = await response.json();
        filmsData.forEach(film => film.releaseDate = new Date(film.releaseDate));
        setFilteredFilms(filmsData)
        setFilms(filmsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);
  return { films, filteredFilms, setFilteredFilms, isLoading, error }
}
