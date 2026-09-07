<template>

    <Browsebanner :movie="movie"/>
    

    <div class="pt-8 relative">
          <TrandingMovies title="Trending Movies" :movies="trendingMovies"/>
    </div>

</template>


<script setup lang="ts">
import Browsebanner from './Components/browsebanner.vue'
import TrandingMovies from '../../components/TrandingMovies/index.vue'



import { onMounted, ref } from 'vue'

import { getTrendingMovies } from '../../services/movieService'
import type { Movie } from '../../types/movies'

const movie = ref<Movie | null>(null)
const trendingMovies = ref<Movie[]>([])

// banner movie
const fetchMovie = async () => {
  try {
    const movies = await getTrendingMovies()

    movie.value = movies[0]
  } catch (error) {
    console.error('TMDB Error:', error)
  }
}


// trending movies
const fetchTrendingMovies = async () => {
  try {
    trendingMovies.value = await getTrendingMovies()
  } catch (error) {
    console.error('Trending Movies Error:', error)
  }
}





onMounted(() => {
    fetchMovie()
  fetchTrendingMovies()
})




</script>