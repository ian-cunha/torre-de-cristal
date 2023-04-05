import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './global.css'

import Footer from "./components/footer"
import NavBar from "./components/nav"

import Index from './pages/index'
import Empresa from './pages/empresa'
import Busca from './pages/busca'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/busca",
    element: <Busca />,
  },


  {
    // it renders this element
    element: <Empresa />,

    // when the URL matches this segment
    path: "/empresa",

    // with this data loaded before rendering
    loader: async ({ request, params }) => {
      return fetch("https://app.smart.youdigital.com.br/sites/v1/empresa/configuracaoSite?token=JLDaOXpeEi9UA5CVjIu3ru2dkZwfl8bc1tuak5IX/", {
        signal: request.signal,
        headers: "Access-Control-Allow-Origin",
        method: "GET",
        body: JSON.stringify(Array),
      });
    },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      return console.log(await request.formData());
    },

  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)
