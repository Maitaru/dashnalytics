import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'


export default function App() {

  const PageLayout = () => {
    return<>
    <Sidebar />
      <div className="flex-1 flex flex-col gap-4 relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  }

  const routerPages = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <DashBoard />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/Products",
          element: <Products />
        },
    
      ]
    }
  ])

  return (
    <main className='bg-primary flex'>
     <RouterProvider router={routerPages}></RouterProvider>
    </main>
  )
}
