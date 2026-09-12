<template>
  <section
    v-if="movies.length"
    class="relative min-h-screen overflow-hidden bg-black"
  >
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :effect="'fade'"
      :speed="1200"
      :loop="true"
      class="h-screen"
    >
      <SwiperSlide
        v-for="movie in movies"
        :key="movie.id"
      >
        <div
          class="relative min-h-screen bg-cover bg-top"
          :style="{
            backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
          }"
        >
          <!-- Dark gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
          ></div>

          <!-- Bottom fade -->
          <div
            class="absolute bottom-0 left-0 right-0 z-5 h-40
                   bg-gradient-to-t from-black to-transparent"
          ></div>

          <!-- Content -->
          <div
            class="container relative z-10 mx-auto flex min-h-screen
                   max-w-[1200px] items-center px-5 pt-20"
          >
            <div class="max-w-2xl text-white">

              <!-- Title -->
              <h1
                class="inline-block bg-gradient-to-r from-red-500
                       via-red-200 to-red-600 bg-[length:200%_200%]
                       bg-clip-text text-4xl font-extrabold
                       text-transparent md:text-5xl lg:text-6xl"
              >
                {{ movie.title }}
              </h1>

              <!-- Info -->
              <div
                class="mt-5 flex items-center gap-3 text-sm text-gray-300"
              >
                <span>
                  {{ movie.release_date?.slice(0, 4) }}
                </span>

                <span>•</span>

                <span>
                  ⭐ {{ movie.vote_average.toFixed(1) }}
                </span>

                <span>•</span>

                <span>Movie</span>
              </div>

              <!-- Overview -->
              <p
                class="mt-5 line-clamp-3 text-sm leading-6
                       text-gray-300 md:text-base"
              >
                {{ movie.overview }}
              </p>

              <!-- Buttons -->
              <div class="mt-7 flex gap-3">
                <button
                  class="cursor-pointer rounded-md bg-white px-6 py-3
                         font-semibold text-black transition
                         hover:bg-gray-300"
                >
                  ▶ Play
                </button>

                <button
                  class="cursor-pointer rounded-md bg-gray-500/70
                         px-6 py-3 font-semibold text-white transition
                         hover:bg-gray-500"
                         @click="openMovie(movie.id)"
                >
                  ⓘ More Info
                </button>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
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
import type { Movie } from '../../../types/movies'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useRouter } from 'vue-router'
const router = useRouter()

import 'swiper/css'
import 'swiper/css/effect-fade'

defineProps<{
  movies: Movie[]
}>()

const imageBaseUrl =
  'https://image.tmdb.org/t/p/original'

  const openMovie = (movieId: number) => {
  router.push(`/movie/${movieId}`)
}
</script>