import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { MovieDetails } from './pages/MovieDetails'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Layout } from './pages/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <MovieDetails />,
      },
      {
        path: '/search',
        element: <SearchResults />,
      },
    ],
  },
])
export function App() {
  return <RouterProvider router={router} />
}
