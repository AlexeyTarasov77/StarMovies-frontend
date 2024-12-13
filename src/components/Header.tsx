import searchIcon from "../assets/searchIcon.svg"
// import { LINKS } from "../app/constants"
import { Link } from "react-router-dom"


interface ILinkProps{
    name: string,
    href: string,
}


export function Header({ links } : { links: ILinkProps[]}){
    return(
        <div>
            <header className=" flex bg-slate-900 pt-4 pb-4 ">
                <div className="text-gray-100 flex">
                <Link to="/"><h1 className="text-4xl font-black font-logo italic pr-16 px-4">STAR MOVIES</h1></Link>
                    <div>
                        <h3 className="font-header flex gap-20 text-3xl font-bold">{links.map((link) => {
                                return <Link to={link.href}><h3>{link.name}</h3></Link>
                        })}                
                        </h3>
                    </div>
                </div>

                <div className="flex ml-16 bg-white/50 rounded-2xl p-1">
                    <input type="text" className="h-10  rounded-2xl bg-white/0 focus:outline-none text-xl"/> 
                    <img src={searchIcon} alt="" />
                </div>
            </header>
        </div>
    )
}