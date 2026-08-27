<template>
  <section class="pt-60  bg-[url(./assets/images/banner.jpg)] bg-cover bg-center bg-no-repeat min-h-screen"
    v-if="movie"
  :style="{
      backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
    }"
  >
    <Header/>
    <div class="container mx-auto px-3 ">

      <div class="h-screen w-screen bg-black/50 absolute top-0 left-0 z-1"></div>
         <Heroview />
   
      </div>
  </section>
</template>


<script setup lang="ts">
import Header from '../../components/Header/header.vue'
import Heroview from './Components/Heroview.vue'


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





</script>