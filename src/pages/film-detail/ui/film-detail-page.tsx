import { useParams } from "react-router-dom";
import { FilmInList, IFilmInList } from "./film-in-list";
import { useEffect, useState } from "react"
import "../../../app/index"

export function FilmDetailPage() {
  const { filmID } = useParams()
  const [genres, setGenres] = useState([]);
    
  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch('http://your-api-url.com/genres')
      const genres = await response.json()
      setGenres(genres);
    };
    getGenres();
  }, []);

  const film = {
    id: 1,
    name: "Inception",
    synopsis: "A skilled thief leads a team into the subconscious to perform corporate espionage.",
    imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
    countryOfOrigin: "Ukraine",
    stars: "*****",
    releaseDate: new Date("2010-07-16"),
    genres: ["Genre1", "Genre2"]
  }

  const recommendedFilms: IFilmInList[] = [
    {
      id: 1,
      name: "Inception",
      description: "A skilled thief leads a team into the subconscious to perform corporate espionage.",
      imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
      stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      releaseDate: new Date("2010-07-16"),
    },
    {
      id: 2,
      name: "The Shawshank Redemption",
      description: "Two imprisoned men bond over several years, finding solace and eventual redemption.",
      imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
      stars: "Tim Robbins, Morgan Freeman, Bob Gunton",
      releaseDate: new Date("1994-09-23"),
    },
    {
      id: 3,
      name: "The Godfather",
      description: "The aging patriarch of a crime dynasty transfers control to his reluctant son.",
      imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
      stars: "Marlon Brando, Al Pacino, James Caan",
      releaseDate: new Date("1972-03-24"),
    },
    {
      id: 4,
      name: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind intent on chaos.",
      imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
      stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
      releaseDate: new Date("2008-07-18"),
    },
    {
      id: 5,
      name: "Pulp Fiction",
      description: "The lives of two hitmen, a boxer, and a pair of robbers intertwine in Los Angeles.",
      imgUrl: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59",
      stars: "John Travolta, Uma Thurman, Samuel L. Jackson",
      releaseDate: new Date("1994-10-14"),
    },
  ]

  return (
    <div className="object-cover flex flex-col" style={{ backgroundColor: "#202020" }}>
    
      <div
        className="background-image"
        style={{
          backgroundImage: `linear-gradient(to top, #424242, rgba(255, 255, 255, 0)), url(${film.imgUrl})`,
        }}
      >
      </div>
      <div className="absolute w-full text-white p-4 pt-30 box-border flex">

        <div className="flex flex-row items-center">
          <div className="w-[70%] mr-2 mb-2">
            <h1 className="text-[23px]">
              {film.name} ({film.releaseDate.getFullYear()})
            </h1>
            <br />
            <p>
              Year of production: <br /> {film.releaseDate.getFullYear()}
            </p>
            <p>
              Country: <br /> {film.countryOfOrigin}
            </p>
            <p>
              Genres: <br />
              {film.genres.join(' ')}
            </p>
            <div>
              <br />
              <p>{film.stars}</p>
              <p>{film.synopsis}</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 overflow-x-scroll">
          {recommendedFilms.map(({ imgUrl }) => (
            <img className="max-h-[300px] rounded-lg" src={imgUrl} />
          ))}
        </div>
      </div>
      <div>
        {recommendedFilms.map(film => <FilmInList key={film.id} filmData={film} />)}
      </div>
    </div>
  );
}