<template>
  <section
    v-if="movie"
    class="relative min-h-screen bg-cover bg-top"
    :style="{
      backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
    }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div
      class="container max-w-[1200px] mx-auto relative z-10 flex min-h-screen items-center px-5 pt-20"
    >
      <div class="max-w-2xl text-white">

        <!-- Movie title -->
        <h1
          class="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
        >
          {{ movie.title }}
        </h1>

        <!-- Movie info -->
        <div class="mt-5 flex items-center gap-3 text-sm text-gray-300">
          <span>{{ movie.release_date?.slice(0, 4) }}</span>

          <span>•</span>

          <span>⭐ {{ movie.vote_average.toFixed(1) }}</span>

          <span>•</span>

          <span>Movie</span>
        </div>

        <!-- Overview -->
        <p
          class="mt-5 line-clamp-3 text-sm leading-6 text-gray-300 md:text-base"
        >
          {{ movie.overview }}
        </p>

        <!-- Buttons -->
        <div class="mt-7 flex gap-3">

          <button
            class="rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300 
            cursor-pointer"
          >
            ▶ Play
          </button>

          <button
            class="rounded-md bg-gray-500/70 px-6 py-3 font-semibold text-white transition hover:bg-gray-500 cursor-pointe"
          >
            ⓘ More Info
          </button>

        </div>

      </div>
    </div>
  </section>

  <!-- Loading -->
  <section
    v-else
    class="flex min-h-screen items-center justify-center bg-black text-white"
  >
    <p class="text-xl">Loading...</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getTrendingMovies } from '../../../services/movieService'
import type { Movie } from '../../../types/movies'

const movie = ref<Movie | null>(null)

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

const fetchMovie = async () => {
  try {
    const movies = await getTrendingMovies()

    movie.value = movies[0]
  } catch (error) {
    console.error('TMDB Error:', error)
  }
}

onMounted(() => {
  fetchMovie()
})
</script>