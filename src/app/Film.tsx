import './Film.css'

export interface IFilmProps {
    name?: string,
    description?: string,
    imgBackground?: string,
    img?: string,
    stars?: string,
    like?: number,
    year?: number,
    country?: string,
    genre?: string,

}

export function Film(props:IFilmProps){
    return(
        // list movies 
        <div className="div-list-film-cards">
            <div className="div-film-card">
                <div className="div-film-img">
                    <img src={props.img} alt="" id="img-film"/>
                </div>
                <div className="div-film-name-description">
                    <div className="div-film-name-year">
                        <h1 id="film-name">{props.name} </h1>
                        <p id="year-film"> ({props.year})</p>
                    </div>
                    <p>{props.stars}</p>
                    <p>{props.description}</p>
                    <p id="like-film">♥ {props.like}</p>
                </div>
            </div>
        </div>
    )
}
