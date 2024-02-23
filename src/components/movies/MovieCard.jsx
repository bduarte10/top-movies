import { Link } from 'react-router-dom'
import { FaStar, FaFilm } from 'react-icons/fa'

/* eslint-disable react/prop-types */
const imgUrl = import.meta.env.VITE_IMG

export function MovieCard({ title, imgPath, id, voteAverage }) {
  return (
    <article className=" flex flex-col justify-between flex-1 rounded-md bg-slate-700 overflow-hidden">
      {imgPath ? (
        <img
          src={`${imgUrl}${imgPath}`}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="p-8 h-full flex items-center">
          <FaFilm className="w-full h-full object-cover object-center text-slate-600" />
        </div>
      )}
      <div className="p-3 flex flex-col justify-between  min-h-[130px] text-center space-y-2">
        <h2 className="text-slate-50 font-medium">{title}</h2>
        {voteAverage && (
          <p className="flex items-center gap-2 justify-center text-slate-50 ">
            <FaStar className="text-amber-300" /> {voteAverage.toFixed(1)}
          </p>
        )}
        <Link
          to={`/${id}`}
          className="w-full block py-2 bg-sky-900 text-slate-50 rounded-md">
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}
