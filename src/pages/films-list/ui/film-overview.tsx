import { Link } from "react-router-dom";

interface IFilmProps {
  name: string;
  country: string;
  year: number;
  genre: string;
  img_url: string;
  id: number;
}

export function FilmOverview({ filmData }: { filmData: IFilmProps }) {
  return (
    <div>
      <Link to={`/films/${filmData.id}`}>
        <div className="flex flex-row w-96 h-80 gap-5 p-2 bg-film rounded-xl text-gray-200 justify-center border-2 border-slate-400">
          <div className="flex">
            <img className="rounded-2xl " src={filmData.img_url} alt="" />
          </div>
          <div className="flex flex-col ">
            <h1 className="flex text-xl font-bold">{filmData.name}</h1>
            <h3 className="flex text-xl">
              {filmData.country} ({filmData.year})
            </h3>
            <h6>{filmData.genre}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
