<template>
    <section class="bg-black py-20">
       <div class="container w-full max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
  <div class="">
       <h2 class="md:text-4xl text-4xl font-bold text-white pt-40">Enjoy on your TV.</h2>
       <p class="md:text-[16px] mt-4 text-white">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
  </div>
  <div class="flex justify-end">
     <img
          :src="Tvimg"
          alt="Logo"
          class=" w-auto h-auto"
        />
  </div>
</div>
       </div>
    </section>
</template>

<script setup lang="ts">

import Tvimg from "../../../assets/images/tvimg.png";




</script>
