

<template>
  <section class="bg-black px-6 py-10 md:px-12 lg:px-20">
    <div class="container w-full max-w-[1200px] mx-auto px-5">
    <h2 class="mb-5 text-2xl font-bold text-white md:text-3xl">
      {{ title }}
    </h2>

   <Swiper
  :modules="[Navigation, Mousewheel]"
  :navigation="true"
  :mousewheel="{
    forceToAxis: true
  }"
  :space-between="16"
  :slides-per-view="2"
  :breakpoints="{
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    },
    1280: {
      slidesPerView: 6
    }
  }"
  class="movie-slider"
>

 <!-- Skeleton -->
  <SwiperSlide
    v-if="movies.length === 0"
    v-for="n in 6"
    :key="`skeleton-${n}`"
  >
    <div class="animate-pulse">
      <!-- Poster -->
      <div
        class="h-[225px] w-full rounded-md bg-[#1D2128] md:h-[300px]"
      ></div>
    </div>
  </SwiperSlide>

  
  <SwiperSlide
    v-for="movie in movies"
    :key="movie.id"
    @click="openMovie(movie.id)"
  >
    <div
      class="group relative cursor-pointer overflow-hidden rounded-md transition duration-300 hover:scale-105"
    >
      <img
        v-if="movie.poster_path"
        :src="`${imageBaseUrl}${movie.poster_path}`"
        :alt="movie.title"
        class="h-[225px] w-full object-cover md:h-[300px]"
      />

      <p
      v-else
      class="text-gray-400"
    >
      Loading movies...
    </p>

      <div
        class="absolute inset-0 flex items-end bg-gradient-to-t from-black via-black/20 to-transparent p-3 opacity-0 transition group-hover:opacity-100"
      >
        <div>
          <h3 class="font-semibold text-white">
            {{ movie.title }}
          </h3>

          <p class="mt-1 text-sm text-gray-300">
            ⭐ {{ movie.vote_average.toFixed(1) }}
          </p>
        </div>
      </div>
      
    </div>
     
  </SwiperSlide>
  
</Swiper>

    

   
</div>
  </section>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white !important;
}
</style>

<script setup lang="ts">
import type { Movie } from '../../types/movies'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Mousewheel } from 'swiper/modules'
import { useRouter } from 'vue-router'

const router = useRouter()

import 'swiper/css'
import 'swiper/css/navigation'

defineProps<{
  title: string
  movies: Movie[]
}>()

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
const openMovie = (movieId: number) => {
  router.push(`/movie/${movieId}`)
}
</script>


