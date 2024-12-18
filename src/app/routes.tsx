import { Layout } from "../pages/layout"
import { FilmDetailPage } from "../pages/film-detail"
import { FilmsListPage } from "../pages/films-list"
import { MainPage } from "../pages/main"



export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      }, {
      path: "/films",
      element: <FilmsListPage />
  }, {
      path: "/films/:id",
      element: <FilmDetailPage />
    }]
  }
]