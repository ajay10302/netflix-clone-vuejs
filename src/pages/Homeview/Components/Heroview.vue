<template>
  <div class="relative z-2 mx-auto w-full max-w-[700px] text-center text-white flex flex-col items-center justify-center">
      <h1 class="md:text-7xl text-5xl font-bold text-white">Unlimited movies, <br> shows, and more</h1>
      <p class="md:text-3xl text-2xl mt-4 font-bold">Starts at ₹149. Cancel at any time.</p>

      <p class="md:text-[20px] mt-4 ">Ready to watch? Enter your email to create or restart your membership.
</p>

  <!-- Email Form -->
        <div
          class="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
        <input
           v-model="email"
           type="email"
            placeholder="Email address"
            class="min-h-14 md:w-[500px] flex-1  rounded-md border border-gray-500 bg-black/60 px-5 text-white outline-none placeholder:text-gray-300 focus:border-white"
          />

          <button
            @click="handleGetStarted"
            class="min-h-14 rounded-md bg-red-600 px-7 text-lg font-bold transition hover:bg-red-700 cursor-pointer"
          >
            Get Started
            <span class="ml-1">›</span>
          </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const router = useRouter();

const email = ref<string>('')

const handleGetStarted = () => {
if (!email.value) {
    toast.error('Please enter your email address' , {
      autoClose: 1000,
      theme: 'dark',
    })
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