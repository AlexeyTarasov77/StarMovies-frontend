import { Outlet } from "react-router-dom"
import { Header } from "../../components/header"
import { Main } from "../main/main.ui"

export function Layout() {
    return (
          <div>
            <header>
                <Header></Header>
                <Outlet />
            </header>
            
            <main>
                <Main></Main>
                <Outlet />
            </main>
          </div>
    )
}