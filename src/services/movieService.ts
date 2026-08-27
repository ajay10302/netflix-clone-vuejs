import type { Movie } from '../types/movies'
import tmdbApi from './tmdb'

interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await tmdbApi.get<MovieResponse>(
    '/trending/movie/week'
  )

  return response.data.results
}