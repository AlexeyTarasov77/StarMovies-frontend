// import { routes } from "./routes";

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import {FilmsList} from './FilmsList'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container-app-filmslist-img'>
      <div className="background-image"></div>
      <div className='app'>
        <App />
      </div>
      <div className='filmslist'>
        <FilmsList />
      </div>
    </div>
  </StrictMode>
)
