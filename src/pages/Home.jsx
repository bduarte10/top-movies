import { MoviesList } from '../components/movies/MoviesList'
import { getMovies } from '../services/movies'

export function Home() {
  getMovies()
  return (
    <>
      <main>
        <MoviesList title="The God Father" id="238" />
      </main>
    </>
  )
}
