
export interface IFilm {
  id: number;
  name: string;
  description: string;
  imgBackground: string;
  img: string;
  stars: string;
  like: number;
  year: number;
  country: string;
  genre: string;
}

interface FilmProps {
  film: IFilm;
}

export function Film({ film }: FilmProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-row">
        {/* Film Image */}
        <div className="flex flex-col pr-4">
          <img
            src={film.img}
            alt={film.name}
            className="max-w-[110px] max-h-[220px] rounded-lg pl-[5%]"
          />
        </div>

        {/* Film Details */}
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline">
            <h1 className="text-lg font-bold">{film.name}</h1>
            <p className="text-sm text-gray-400 pl-2">({film.year})</p>
          </div>
          <p>{film.stars}</p>
          <p>{film.description}</p>
          <p className="text-blue-200 font-bold">♥ {film.like}</p>
        </div>
      </div>
    </div>
  )
}
