
import { IFilmProps} from './Film'
import './App.css'

export function App(props:IFilmProps){
    return(
        <div id="container">
            {/* header */}

            {/* main */}
            <div className="movie-details">
                <h1 className="film-name-back">Men in black (1997)</h1>
                <br />
                <p>Year of production: <br /> 1997</p>
                <p>Country: <br /> USA</p>
                <p>Genre: <br /> fantasy, action, comedy, adventure</p>
                <div className="div-movie-description">
                    <br />
                    <p>★★★★★</p>
                    <p>
                        They are the Earth's best kept secret. They work for an unofficial government agency that regulates alien activities on Earth. They are the best, last and only line of defense of the Earth from the scum of the universe. Their work is secret, their weapons are perfect, they have no equal, they leave no traces. They are the Men in Black.
                    </p>
                    <br />
                    <p id="like-film">♥ 6795 likes</p>
                </div>
            </div>
            <div className="image-gallery">
                <img className="imgs-scroll" src="https://upload.wikimedia.org/wikipedia/en/9/97/MIB_game_cover.jpg" 
                alt="Men in black (1997)"/>
                <img className="imgs-scroll" src="https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_FMjpg_UX1000_.jpg" 
                alt="Mission: Impossible"/>
                <img className="imgs-scroll" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEtWh0XIBq_D09h_WFzQZKhcH7bR6iQZTWg&s" 
                alt="Curly Sue (1991)"/>
                <img className="imgs-scroll" src="https://cs14.pikabu.ru/post_img/2022/06/14/10/1655226903177017618.jpg" 
                alt="Tom Cruise"/>
                <img className="imgs-scroll" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/300x450" 
                alt="Avatar (2009)"/>
                <img className="imgs-scroll" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/300x450" 
                alt="Back to the Future (1985)"/>
            </div>
        </div>
    )
}