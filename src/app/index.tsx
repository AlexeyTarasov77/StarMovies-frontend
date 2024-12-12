// import { routes } from "./routes";

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import {FilmsList} from './FilmsList'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container-app-filmslist-img object-cover" style={{ backgroundColor: '#202020'}}>

      <div className="background-image"
        // className="relative h-[600px] overflow-hidden from-[#424242] bg-cover bg-top brightness-50 bg-gradient-to-r "
        // style={{backgroundImage: `url(https://programmi.sky.it/images/cc/upload/c_scale,w_1920/f_webp/v1/background/background-men-in-black)`,}}
        >
      </div>
      <div className="app absolute top-0 left-0 w-full text-white p-4 box-border">
        <App />
      </div>
      <FilmsList />
    </div>
  </StrictMode>
)
