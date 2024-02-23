import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from '../services/movies'
import { MovieCard } from '../components/movies/MovieCard'

export function SearchResults() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  useEffect(() => {
    async function getSearchedMovies(query) {
      try {
        const moviesResults = await searchMovies(query)
        setMovies(moviesResults)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    getSearchedMovies(query)
  }, [query])

  return (
    <div className="max-w-7xl h-full  mx-auto mt-10">
      <h2 className="text-3xl  text-slate-50 font-bold text-center">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imgPath={movie.poster_path}
              id={movie.id}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      {movies.length === 0 && <p>Nenhum filme encontrado.</p>}
    </div>
  )
}
