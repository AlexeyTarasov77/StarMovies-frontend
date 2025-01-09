export interface IFilmInList {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  stars: string;
  releaseDate: Date;
  minAge: number | null;
  runTime: string;
  // runTime: number;
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

export interface IReview {
  id: number;
  rating: number;
  comment: string | null;
  stars: string;
  movieId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export function Review ({ reviewData }: { reviewData: IReview }) {
  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-col bg-customGray " >
            <div className="flex justify-between flex-row items-baseline border-b-2 p-2 mb-2">
              <h1 className="text-lg font-bold">Name</h1>
              <p className="text-sm text-gray-400 pl-2">
                {reviewData.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="p-2">
              <p>{reviewData.comment}</p>
              <div className="flex flex-row gap-2">
              <p>{reviewData.stars}</p>
              <p>{reviewData.rating}</p></div>
            </div>
      </div>
    </div>
  );
}

