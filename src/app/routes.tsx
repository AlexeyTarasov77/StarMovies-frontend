import { Layout } from "../pages/layout"
import { mainPageRoute } from "../pages/main"
import { filmsListPageRoute } from "../pages/filmsList"



export const routes = [
  {
    element: <Layout />,
    children: [mainPageRoute, filmsListPageRoute]
  }
]