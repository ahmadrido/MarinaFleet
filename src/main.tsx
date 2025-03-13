import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import App from './App.tsx'
import Fleet from './component/pages/ourFleet.tsx'
import TourPackages from './component/pages/tourPackages.tsx'
import Booking from './component/pages/booking.tsx'
import ErrorPages from './component/pages/errorPages.tsx'
import Contact from './component/pages/contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPages />,
  },
  {
    path: '/ourFleet',
    element: <Fleet />,
  },
  {
    path: '/packages',
    element: <TourPackages />,
  },
  {
    path: '/booking',
    element: <Booking />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
