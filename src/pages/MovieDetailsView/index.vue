<template>
  <section class="min-h-screen bg-black text-white">
    <div v-if="movie" class="container w-full max-w-[1200px] mx-auto px-5 py-30">

      <!-- Backdrop -->
       <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
     
       
       
      <div
        class="h-[400px] w-full overflow-hidden rounded-lg md:h-[600px]"
      >
       <img
          :src="`${imageBaseUrl}${movie.backdrop_path}`"
          :alt="movie.title"
          class="w-full h-full object-cover"
        />
      </div>

     

      <!-- Content -->
      <div
        class="relative z-10 flex min-h-screen items-start "
      >
        <div class="max-w-3xl">

       

          <h1 class="text-4xl font-bold md:text-6xl">
            {{ movie.title }}
          </h1>

          <div class="mt-5 flex gap-4 text-gray-300">
            <span>
              ⭐ {{ movie.vote_average.toFixed(1) }}
            </span>

            <span>
              {{ movie.release_date }}
            </span>
          </div>

             <p
              v-if="movie.tagline"
              class="mt-4 text-xl italic text-gray-300"
            >
              "{{ movie.tagline }}"
             </p>


             <div class="mt-5 flex flex-wrap gap-4 text-gray-300">
              <span>
                ⭐ {{ movie.vote_average.toFixed(1) }}
              </span>

              <span>
                📅 {{ movie.release_date }}
              </span>

              <span v-if="movie.runtime">
                ⏱ {{ movie.runtime }} min
              </span>
            </div>



                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    v-for="genre in movie.genres"
                    :key="genre.id"
                    class="rounded-full border border-gray-500 px-4 py-1 text-sm text-gray-300"
                  >
                    {{ genre.name }}
                  </span>
                </div>

          <p class="mt-6 text-lg leading-8 text-gray-300">
            {{ movie.overview }}
          </p>

          <button
            class="mt-8 rounded-md bg-red-500 w-full cursor-pointer px-6 py-3 font-semibold text:white hover:text-black transition hover:bg-gray-300"
          >
            ▶ Play
          </button>

        </div>
      </div>
      </div>
    <Castmemberdetails :cast="cast"/>

    </div>

    <!-- Loading -->
    <div
      v-else
      class="flex min-h-screen items-center justify-center"
    >
      <p class="text-xl text-gray-400">
        Loading movie...
      </p>
    </div>
  </section>



</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieDetails, getMovieCast } from '../../services/movieService'
import type {  MovieDetails, CastMember } from '../../types/movies'
import Castmemberdetails from './Components/Castmemberdetails/index.vue'

const route = useRoute()

const movie = ref<MovieDetails | null>(null)
  const cast = ref<CastMember[]>([])

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

const fetchMovieDetails = async () => {
  try {
    const movieId = Number(route.params.id)

    movie.value = await getMovieDetails(movieId)
  } catch (error) {
    console.error('Movie Details Error:', error)
  }
}

const fetchMovieCast = async () => {
  try {
    const movieId = Number(route.params.id)

    cast.value = await getMovieCast(movieId)
  } catch (error) {
    console.error('Movie Cast Error:', error)
  }
}

onMounted(() => {
  fetchMovieDetails()
  fetchMovieCast()
})
</script>