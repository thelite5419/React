import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromChildren, Route, RouterProvider, Routes} from 'react-router-dom'
import { Header, Footer, About, Contact, Home, User, GitHub} from './Index'


import Layout from './Layout.jsx'
import { GithubInfoLoader } from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/user/:userid" element={<User />} />
        <Route 
        loader= {
          GithubInfoLoader
        }
        path="/GitHub" element={<GitHub />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
