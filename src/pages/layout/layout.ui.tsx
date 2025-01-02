import { Outlet } from "react-router-dom"
import { LINKS } from "../../app/constants"
import { Header } from "../../components/Header"







export function Layout() {
  return (
    <div>
      <div>
        <header>
           <Header links={LINKS}></Header> 
        </header>
        <main className="bg-slate-900">
            <Outlet/>
        </main>
      </div>
    </div>
  )
}
