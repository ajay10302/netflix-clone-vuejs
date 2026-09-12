import type { Movie, MovieDetails, CastMember } from '../types/movies'
import tmdbApi from './tmdb'

interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

interface CreditsResponse {
  cast: CastMember[]
}


export const getMovies = async (endpoint: string): Promise<Movie[]> => {
  const response = await tmdbApi.get<MovieResponse>(endpoint)

  return response.data.results
}


export const getTrendingMovies = async (): Promise<Movie[]> => {
  return getMovies('/trending/movie/week')
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  return getMovies('/movie/popular')
}

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  return getMovies('/movie/top_rated')
}


export const getUpcomingMovies = async (): Promise<Movie[]> => {
  return getMovies('/movie/upcoming')
}

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const response = await tmdbApi.get<MovieDetails>(`/movie/${movieId}`)

  return response.data
}

export const getMovieCast = async (
  movieId: number
): Promise<CastMember[]> => {
  const response = await tmdbApi.get<CreditsResponse>(
    `/movie/${movieId}/credits`
  )

  return response.data.cast
}