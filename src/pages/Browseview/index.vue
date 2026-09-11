<template>

    <Browsebanner :movie="movie"/>
    

    <div class="">
          <TrandingMovies title="Trending Movies 🔥" :movies="trendingMovies"/>
          <PopularMovies title="Popular Movies 🎦" :movies="popularMovies"/>
          <TopratedMovies title="Top Rated Movies ⭐" :movies="topRatedMovies"/>
          <UpcomingMovies title="Upcoming Movies 🕒" :movies="upcomingMovies"/>
    </div>

    

</template>


<script setup lang="ts">
import Browsebanner from './Components/browsebanner.vue'
import TrandingMovies from '../../components/TrandingMovies/index.vue'
import PopularMovies from '../../components/PopularMovies/index.vue'
import TopratedMovies from '../../components/TopratedMovies/index.vue'
import UpcomingMovies from '../../components/UpcomingMovies/index.vue'



import { onMounted, ref } from 'vue'

import { getTrendingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../services/movieService'
import type { Movie } from '../../types/movies'

const movie = ref<Movie | null>(null)
const trendingMovies = ref<Movie[]>([])
const popularMovies = ref<Movie[]>([])
const topRatedMovies = ref<Movie[]>([])
const upcomingMovies = ref<Movie[]>([])
// banner movie
const fetchMovie = async () => {
  try {
    const movies = await getTrendingMovies()

    movie.value = movies[0]
  } catch (error) {
    console.error('TMDB Error:', error)
  }
}


const fetchMovies = async () => {
  try {
    trendingMovies.value = await getTrendingMovies()
    popularMovies.value = await getPopularMovies()
    topRatedMovies.value = await getTopRatedMovies()
    upcomingMovies.value = await getUpcomingMovies()
  } catch (error) {
    console.error('Movies Error:', error)
  }
}





onMounted(() => {
  fetchMovie()
  fetchMovies()
})




</script>