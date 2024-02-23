const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const searchURL = import.meta.env.VITE_SEARCH

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
}

const getMovies = async () => {
  try {
    const response = await fetch(
      `${moviesURL}top_rated?language=pt-BR`,
      options,
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

const getMovieById = async (id) => {
  try {
    const response = await fetch(`${moviesURL}${id}?language=pt-BR`, options)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching movie by ID:', error)
    throw error
  }
}

const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${searchURL}?query=${query}&language=pt-BR`,
      options,
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error searching movies:', error)
    throw error
  }
}

export { getMovies, getMovieById, searchMovies }
