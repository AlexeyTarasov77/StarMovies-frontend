import { FilmsList } from "./filmsList.ui"
import { RouteObject } from "react-router-dom"


export const filmsListPageRoute: RouteObject = {
    path: "/films",
    element: <FilmsList />
}