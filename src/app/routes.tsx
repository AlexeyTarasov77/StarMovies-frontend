import { Layout } from "../pages/layout"
import { mainPageRoute } from "../pages/main"



export const routes = [
  {
    element: <Layout />,
    children: [mainPageRoute]
  }
]