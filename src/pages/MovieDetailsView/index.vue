<template>
  <section class="min-h-screen bg-black text-white">
    <div v-if="movie" class="container w-full max-w-[1200px] mx-auto px-5 py-30">

      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-cover bg-top"
        :style="{
          backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
        }"
      ></div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/70"></div>

      <!-- Content -->
      <div
        class="relative z-10 flex min-h-screen items-center "
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

          <p class="mt-6 text-lg leading-8 text-gray-300">
            {{ movie.overview }}
          </p>

          <button
            class="mt-8 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300"
          >
            ▶ Play
          </button>

        </div>
      </div>
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
import { getMovieDetails } from '../../services/movieService'
import type { Movie } from '../../types/movies'

const route = useRoute()

const movie = ref<Movie | null>(null)

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

const fetchMovieDetails = async () => {
  try {
    const movieId = Number(route.params.id)

    movie.value = await getMovieDetails(movieId)
  } catch (error) {
    console.error('Movie Details Error:', error)
  }
}

onMounted(() => {
  fetchMovieDetails()
})
</script>