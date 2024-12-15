import { Banner } from "../../../components/Banner"
import { FilmsList } from "./films-list" 
import { RECOMMENDED, CONTINUE, POPULAR, BANNER } from "../../../app/constants"

export function MainPage() {
    return (
        <div>                
            <Banner images={BANNER}/>
            <div className="text-white flex-col font-bold text-2xl mt-5 ">
                <div>
                    <h1>Recomended</h1>
                    <FilmsList images = {RECOMMENDED}/>
                </div>
                <div className="">
                    <h1>Continue</h1>
                   <FilmsList images = {CONTINUE}/>
                </div>
                <div className="">
                    <h1>Popular</h1>
                    <FilmsList images = {POPULAR}/>
                </div>
            </div>
        </div>
    )
}
