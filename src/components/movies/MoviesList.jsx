import { useState } from 'react'
import { getMovies } from '../../services/movies'
import { MovieCard } from './MovieCard'
import { useEffect } from 'react'

export function MoviesList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesList = await getMovies()
        setMovies(moviesList)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <section className="max-w-7xl w-full mx-auto my-10">
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imgPath={movie.poster_path}
            id={movie.id}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </section>
  )
}
