export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
}

export interface MovieDetails extends Movie {
  tagline: string | null
  runtime: number | null
  genres: {
    id: number
    name: string
  }[]
}


export interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
}