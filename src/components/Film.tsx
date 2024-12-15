import { Link } from "react-router-dom"

interface IFilmProps{
    name: string,
    contry: string,
    year:number,
    genre: string,
    img_url: string,
    id: number
}

export function Film(props: IFilmProps){
    return(
        <div>
            <Link to={`/film/${props.id}`}>
            <div className="flex flex-row w-96 h-80 gap-5 p-2 bg-film rounded-xl text-gray-200 justify-center border-2 border-slate-400">
                <div className="flex">
                    <img className="rounded-2xl " src={props.img_url} alt="" />
                </div>
                <div className="flex flex-col ">
                    <h1 className="flex text-xl font-bold">{props.name}</h1>
                    <h3 className="flex text-xl">{props.contry} ({props.year})</h3>
                    <h6>{props.genre}</h6>
                </div>
            </div>
            </Link>
        </div>
    )
}