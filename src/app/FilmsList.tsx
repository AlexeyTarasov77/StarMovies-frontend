import { Film } from './Film';
import {films} from './constants'

export function FilmsList() {
    return (
        <div className="films-list">
            {films.map((film) => (
                <Film key={film.id} film={film} />
            ))}
        </div>
    )
}
