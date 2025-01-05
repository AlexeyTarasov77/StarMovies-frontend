export interface IFilmInList {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  stars: string;
  releaseDate: Date;
}

export function FilmInList({ filmData }: { filmData: IFilmInList }) {

  return (
    <div className="mb-6">
      <div className="flex flex-row ">
        <div className="flex flex-col pr-4 bg-backgroundImage">
          <img
            src={filmData.imgUrl}
            alt={filmData.name}
            className="max-w-[110px] max-h-[220px] rounded-lg pl-[5%]"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-baseline">
            <h1 className="text-lg font-bold">{filmData.name}</h1>
            <p className="text-sm text-gray-400 pl-2">
              ({filmData.releaseDate.getFullYear()})
            </p>
          </div>
          <p>{filmData.stars}</p>
          <p>{filmData.description}</p>
        </div>
      </div>
    </div>
  );
}
