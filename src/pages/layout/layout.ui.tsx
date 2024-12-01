import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { LINKS } from "../../app/constants"


export function Layout() {
    return (
          <div>
            <header>
            {/* {LINKS.map()=>{
                return <Header
                    name={props.name}
                ></Header> 
                    }}
                 */}
            </header>
            
            <main>
                <Outlet />
            </main>
          </div>
    )
}