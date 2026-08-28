<template>
  <section class="relative pt-60 pt-60  bg-[url(./assets/images/banner.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
    <div class="h-screen w-full bg-black/70 absolute top-0 left-0 z-1"></div>
     
    <div class="container mx-auto px-3 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-2 mx-auto w-full max-w-175 text-center text-white flex flex-col items-center justify-center">
      <h1 class="md:text-6xl text-5xl font-bold text-white">Unlimited ,<span class="text-red-600">movies,<br> shows </span>  and more</h1>
      <p class="md:text-xl text-2xl mt-4 font-bold">Starts at ₹149. Cancel at any time.</p>
      
      <p class="md:text-[16px] mt-4 ">Ready to watch? Enter your email to create or restart your membership.
      </p>

  <!-- Email Form -->
        <div
          class="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
        <input
        v-model="email"
        type="email"
        placeholder="Email address"
        class="min-h-14 md:w-100 flex-1  rounded-md border border-gray-500 bg-black/60 px-5 text-white outline-none placeholder:text-gray-300 focus:border-white"
          />

          <button
            @click="handleGetStarted"
            class="min-h-14 rounded-md bg-red-600 px-7 text-xl font-bold transition hover:bg-red-700 cursor-pointer"
          >
            Get Started
            <span class="ml-1">›</span>
          </button>
        </div>
        </div>
      </section>
    </template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from '../../../composables/useToast';

const router = useRouter();
const{showError } = useToast();

const email = ref<string>('')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const handleGetStarted = () => {
if (!email.value) {
    showError('Please enter your email address');
    return
  }

  if(!emailRegex.test(email.value)) {
    showError('Please enter a valid email address');
    return
  }

  router.push({
    path: '/register',
    query: {
      email: email.value,
    },
  })
}
</script>