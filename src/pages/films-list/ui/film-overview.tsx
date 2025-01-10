import { Link } from "react-router-dom";

interface IFilmProps {
  name: string;
  country: string;
  releaseDate: Date;
  genre: string;
  coverUrl: string;
  id: number;
}

export function FilmOverview({ filmData }: { filmData: IFilmProps }) {

  filmData.releaseDate = new Date(filmData.releaseDate)
  return (
    <div>
      <Link to={`/films/${filmData.id}`}>
        <div className="flex flex-row w-96 h-80 gap-5 p-2 bg-film rounded-xl text-gray-200 justify-center border-2 border-slate-400">
          <div className="flex">
            <img className="rounded-2xl " src={filmData.coverUrl} alt="" />
          </div>
          <div className="flex flex-col ">
            <h1 className="flex text-xl font-bold">{filmData.name}</h1>
            <h3 className="flex text-xl">
              {filmData.country} ({filmData.releaseDate.getFullYear()})
            </h3>
            <h6>{filmData.genre}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
