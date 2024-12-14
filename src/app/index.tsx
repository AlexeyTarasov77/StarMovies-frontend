// import { routes } from "./routes";

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { FilmDetailPage } from '../pages/film-detail'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilmDetailPage />
  </StrictMode>
)
