import searchIcon from "../assets/searchIcon.svg"
import { Links } from "./Links"
import { LINKS } from "../app/constants"

export function Header(){
    return(
        <div>
            <header className="bg-gray-900 flex pt-4 pb-4 ">
                <div className="text-gray-100 flex">
                    <h1 className="text-4xl font-black font-logo italic pr-16 px-3">STAR MOVIES</h1>
                    <div>
                        <Links links={LINKS} />
                    </div>

                </div>

                <div className="flex ml-16 bg-white/50 rounded-2xl p-1">
                    <input type="text" className="h-14 w-80 rounded-2xl bg-white/0 focus:outline-none text-xl"/> 
                    <img src={searchIcon} alt="" />

                </div>
            </header>
        </div>
        
    )
}