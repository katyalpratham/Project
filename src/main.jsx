import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contactus/Contact.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children : [{
      path:"",
      element : <Home/>
    },
    {
      path:"about",
      element: <About/>
    },
  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"user/:userid",
    element: <User/>
  }]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
