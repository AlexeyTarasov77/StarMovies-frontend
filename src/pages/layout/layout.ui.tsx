import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"


export function Layout() {
    return (
          <div>
            <header>
                <Header></Header>
            </header>
            
            <main>
                <Outlet />
            </main>
          </div>
    )
}