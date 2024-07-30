import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Containers/Home/index'
import Index from './Containers/Index/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './style/reset.css'
import './style/style.css'

const router = createBrowserRouter([
  {
    path: "clone_monster_cat/",
    element: <Index/>,
    errorElement: <div></div>,
  },
  {
    path: "clone_monster_cat/:Id",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
