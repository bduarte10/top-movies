import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SearchBar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`, { replace: true })

    setSearch('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Busque um filme"
        className="bg-slate-500 text-slate-50 rounded-md h-10 p-2"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        type="submit"
        className="bg-slate-400 hover:bg-slate-500 transition-colors duration-300 ease-in-out text-sm font-medium text-slate-50 rounded-md h-10 p-2 ml-2">
        Buscar
      </button>
    </form>
  )
}
