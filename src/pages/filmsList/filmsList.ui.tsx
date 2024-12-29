import { useState, useEffect } from "react"
import { Film } from "../../components/Film" 

// interface IFilmListProps{
//     name: string,
//     сontry: string,
//     year:number,
//     genre: string,
//     img_url: string
// }
// {images, names, contries, years,genres } : { images, names, contries, years, genres: IFilmListProps[]}

export const filmsList= [
{name: "DOM Z PAPIERU", contry: "Ukraine", year: 2004, genre:"Triller",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX6d-7sGjBiKRdkayZghe5dfrzBjGOJ4M59zRNCHPWBZ1w07lBJT2VImkAvtirL_epfGaPMNj2_DJtfEZGmbRssGoSeOfRAdcrVWamP04vesZS5A4wAH-6ll3S9uLbia893erg.jpg?r=09e", id: 0},
{name: "ARCANE", contry: "Ukraine", year: 2004, genre:"Triller",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcAJVvJbCM18gb9ILDXusq2AiYt4ZMGRHC0fGDr2iEOTLRl-waJzNt4IHXGTq_4X6ibPmOvuB7-NFT-i_RMthJ2rBWRBB-jj88fxpKQQ4plj-n62HJcT2eqcXnzoIpyfUPPvTw.jpg?r=1e5", id: 1},
{name: "EMILY W PARYŻU", contry: "Ukraine", year: 2004, genre:"Drama",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaDviQt3GtbapePGifGiYqxtj2-wQJo9bVMooXyxUmyURveGdsTi59blEXy7WCJ3EQCiTzZaMG6Rr2bPID4TFfS4Q_u04YeffrXvlwL89XLSePP5mSijxI27yDEXgFSxO9dL2Q.jpg?r=87b", id: 2},
{name: "LUCYFER", contry: "Ukraine", year: 2004, genre:"Horror",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaPhlwPFxvNICv_gOX44b-2V_7Gkbn2Js1CyMEpYV-uUJi_YRBm3SuJ789L0rJHdqYQcgKRKPnOaEb-Skq4cArcUWNUcl4Fv6ivaH-hKqDj8CD-CbwewQtVZFtRuZ8bEHT425Q.jpg?r=373", id: 3},
{name: "SZALEŃSTWO", contry: "Ukraine", year: 2004, genre:"Triller",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZAumHI_IMvdCEasu8M3wRFZ4mLL16ypeAxDupsmfeh_jzvb5XojchyN-nWl9UZFl9e0-ZvR53QEhMYIgM6yaUfAsu1z-1HmiaH7DAG4uGnRNddYnqk_bA9gLv1cnL_6BbYTfA.jpg?r=0aa", id: 4},
{name: "MARYJA", contry: "Ukraine", year: 2004, genre:"Scientific",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRdhYCqzX-94fs5A5y0llZYgMmWSgGxs7CbCJ9P8g8zL2m2hFfeQdL_PBQcSnH7Sd0DJ5TtYNox0Ot5FY0GUL29KT0GFrX8XLFxKJexH4Kgu3Q64Wac5HRJnvyfqdQ8nP1goSA.jpg?r=081", id: 5},
{name: "EMILY W PARYŻU", contry: "Ukraine", year: 2004, genre:"Triller",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaDviQt3GtbapePGifGiYqxtj2-wQJo9bVMooXyxUmyURveGdsTi59blEXy7WCJ3EQCiTzZaMG6Rr2bPID4TFfS4Q_u04YeffrXvlwL89XLSePP5mSijxI27yDEXgFSxO9dL2Q.jpg?r=87b", id: 6},
{name: "GRINCH", contry: "Ukraine", year: 2004, genre:"Scientific",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb9AZ86hUd_PzsJLS1GelLF8qJaXuzkeVQ8ZI_KPQBxJ7wdNGjeaOWInZ_L2YFVL2LXAyWAyqa7rZHrevWuhcYQo9gPNi9UIgWv3.jpg?r=f59", id: 7},
{name: "SAMI SWOI POCZĄTEK", contry: "Ukraine", year: 2004, genre:"Drama",  img_url: "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbtAdW5Sngv53DUrwUdT1Zf2HAgEk4TCMJhW2ERUUQ9YUqyJXTOhhoHhGqgJ6YcCIrtli-utUEhK-pCTYritywkl-ZcHtw-cA3mV.jpg?r=e30", id: 8}
]


export function FilmsList(){
    const [selectedGenre, setSelectedGenre] = useState("All")
    const [filteredFilms, setFilteredFilms] = useState(filmsList)

    useEffect(() => {
        console.log(setSelectedGenre)
        if (selectedGenre === "All") {
            setFilteredFilms(filmsList)
        } else {
            const filtered = filmsList.filter((film) => {
                return film.genre === selectedGenre
            })
            setFilteredFilms(filtered)
        }
    }, [selectedGenre])

    return(
        <div className=" bg-slate-900 ">
        <div className=" bg-slate-900 ">
            <h1 className="ml-5 text-white text-xl">Choose genre:
                <select className="ml-5 text-black text-xl rounded-2xl bg-white/50"  
                onChange={(event) => {
                    setSelectedGenre(event.target.value)
                }}>
                    <option value="All">All</option>
                    <option value="Triller">Triller</option>
                    <option value="Drama">Drama</option>
                    <option value="Scientific">Scientific</option>
                    <option value="Horror">Horror</option>
                </select>
            </h1>
        </div>
            <div className="flex flex-wrap gap-10 mt-10 justify-center min-h-svh">
                {filteredFilms.map((film) => {
                    return <Film
                            img_url={film.img_url}
                            name={film.name}
                            contry={film.contry}
                            year={film.year}
                            genre={film.genre}
                            key={film.id}
                            id={film.id}
                    ></Film>
                })}
            </div>
        </div>
    )

}