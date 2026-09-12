<template>
  <section class="bg-black py-10">
    <h2 class="mb-6 text-2xl font-bold text-white">
      Cast
    </h2>

    <Swiper
      :modules="[Navigation, Mousewheel]"
      :navigation="true"
      :mousewheel="{ forceToAxis: true }"
      :space-between="16"
      :slides-per-view="2"
      :breakpoints="{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
      }"
      class="cast-slider"
    >
      <SwiperSlide
        v-for="actor in cast"
        :key="actor.id"
      >
        <div class="cursor-pointer">
          
          <!-- Actor Image -->
          <img
            v-if="actor.profile_path"
            :src="`${imageBaseUrl}${actor.profile_path}`"
            :alt="actor.name"
            class="h-[210px] w-full rounded-md object-cover
                   transition duration-300
                   hover:scale-105
                   md:h-[250px]"
          />

          <!-- No Image -->
          <div
            v-else
            class="flex h-[210px] items-center justify-center
                   rounded-md bg-gray-800 text-gray-500
                   md:h-[250px]"
          >
            No Image
          </div>

          <!-- Actor Name -->
          <h3 class="mt-3 truncate font-semibold text-white">
            {{ actor.name }}
          </h3>

          <!-- Character -->
          <p class="mt-1 truncate text-sm text-gray-400">
            {{ actor.character }}
          </p>

        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import type { CastMember } from '../../../../types/movies'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

defineProps<{
  cast: CastMember[]
}>()

const imageBaseUrl =
  'https://image.tmdb.org/t/p/w500'
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white !important;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 24px;
}
</style>