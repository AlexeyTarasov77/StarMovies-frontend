import { Banner } from "../../components/Banner"
import { Films } from "../../components/Films" 
import { RECOMMENDED, CONTINUE, POPULAR, BANNER } from "../../app/constants"

export function Main() {
    return (
        <div>                
            <Banner images={BANNER}/>
            <div className="text-white flex-col font-bold text-2xl mt-5 ">
                <div>
                    <h1>Recomended</h1>
                    <Films images = {RECOMMENDED}/>
                </div>
                <div className="">
                    <h1>Continue</h1>
                   <Films images = {CONTINUE}/>
                </div>
                <div className="">
                    <h1>Popular</h1>
                    <Films images = {POPULAR}/>
                </div>
            </div>
        </div>
    )
}