import { Outlet } from "react-router-dom"
import { LINKS } from "../../app/constants"
import { Header } from "../../components/Header"



export function Layout() {

    return (
          <div>
            <header>
               <Header links={LINKS}></Header> 
            </header>
            
            <main>
                <Outlet />
            </main>
          </div>
    )
}