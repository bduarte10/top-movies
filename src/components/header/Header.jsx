import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export function Header() {
  return (
    <header className="p-4 bg-slate-700 w-full">
      <div className="max-w-7xl h-full flex flex-col sm:flex-row items-center justify-between mx-auto">
        <Link to="/">
          <h1 className="font-bold text-2xl text-slate-100">TopMovies</h1>
        </Link>
        <SearchBar />
      </div>
    </header>
  )
}
