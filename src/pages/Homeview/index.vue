<template>
         <Heroview />
        <Enjoyview/>
</template>


<script setup lang="ts">

import Heroview from './Components/Heroview.vue'
import Enjoyview from './Components/Enjoyview.vue'

import { onMounted, ref } from 'vue'
import { getTrendingMovies } from '../../services/movieService'
import type { Movie } from '../../types/movies'

const movie = ref<Movie | null>(null)

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'


const fetchMovie = async () => {
  try {
    const movies = await getTrendingMovies()

    movie.value = movies[0]

    console.log('Movie:', movie.value)
  } catch (error) {
    console.error('TMDB Error:', error)
  }
}

onMounted(() => {
  fetchMovie()
})

//  v-if="movie"
//   :style="{
//       backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
//     }"



</script>