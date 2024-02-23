import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../services/movies'
import {
  BsFillFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2,
} from 'react-icons/bs'
import { formatCurrency } from '../utils/formatter'
import { FaFilm } from 'react-icons/fa'

const imgUrl = import.meta.env.VITE_IMG

export function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  console.log('movie :', movie)

  useEffect(() => {
    async function fetchMovieDetail(id) {
      try {
        const movieDetails = await getMovieById(id)
        setMovie(movieDetails)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovieDetail(id)
  }, [id])

  return (
    <section className="max-w-7xl h-full flex flex-row mt-20 gap-10 items-center  mx-auto">
      {movie?.poster_path ? (
        <img
          src={`${imgUrl}${movie?.poster_path}`}
          alt=""
          className="h-full max-h-[462px] object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="p-8 h-full flex items-center">
          <FaFilm className="w-full h-full object-cover object-center text-slate-600" />
        </div>
      )}
      <div className="flex flex-col gap-10">
        <p className="text-2xl font-semibold text-white mb-5">
          {movie?.tagline}
        </p>
        <div className="flex items-center gap-5 ">
          <BsWallet2 className="text-4xl text-white" />
          <div className="text-base text-white">
            <h3>Orçamento:</h3>
            <p>{formatCurrency(movie?.budget || 0)}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <BsGraphUp className="text-4xl text-white" />
          <div className="text-base text-white">
            <h3>Receita:</h3>
            <p>{formatCurrency(movie?.revenue)}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <BsHourglassSplit className="text-4xl text-white" />
          <div className="text-base text-white">
            <h3>Duração:</h3>
            <p>{movie?.runtime} minutos</p>
          </div>
        </div>
        <div className="flex items-start  gap-5 ">
          <BsFillFileEarmarkTextFill className=" w-full h-full max-w-[36px] text-white" />
          <div className="text-base text-white">
            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
