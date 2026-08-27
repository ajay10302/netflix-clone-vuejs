

<template>
  <Header />
  <div class="pt-40 relative z-2">
    <form class=" mx-auto w-[500px]  bg-black/80 p-10 rounded-md gap-4">
      <h1 class="text-3xl font-bold text-white text-center mb-5">Login</h1>
      <div class="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          class="border-1 border-gray-600 rounded-md p-4 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          class="border-1  border-gray-600 rounded-md p-4 text-white"
        />
        <button class="bg-red-500 text-white font-bold text-[20px] hover:bg-red-600 transition duration-300 py-4 px-4 rounded-md cursor-pointer">
          Login
        </button>

        <p class="text-white text-center">Don't have any account ? <router-link
              to="/register" class="text-red-500 hover:text-red-600 font-bold tracking-normal font-body">Register Now</router-link></p>
      </div>
     </form>
  </div>
</template>

<script>
import Header from '../../components/header/header.vue';

export default {
  components: {
    Header,
  },
};

</script>