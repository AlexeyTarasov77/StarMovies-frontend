import { useState, useEffect } from "react";
import { BASE_URL } from "../../../app/constants";
interface IMovie {
  id: number;
  name: string;
  genre: string;
  img_url: string;
  country: string;
  year: number;
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
        const response = await fetch(`${BASE_URL}/movies/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch films");
        }
        const filmsData = await response.json();
        setFilms(filmsData);
        setFilteredFilms(filmsData);
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
  return {films: films, isLoading: isLoading, error: error}
}
