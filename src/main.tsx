import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import HomePage from "./components/pages/HomePage.tsx";
import ThreeJs from "./components/pages/ThreeJs.tsx";

import './style/global.css'
import './style/variables.css'
import './style/mixins.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/threejs",
        Component: ThreeJs,
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
