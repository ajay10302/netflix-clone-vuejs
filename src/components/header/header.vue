<template>
  <header class="bg-gradient-to-b from-black to-transparent absolute top-0 left-0 w-full z-10">
    <div
      class="container mx-auto flex flex-wrap py-5 px-3 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          :src="Logo"
          alt="Logo"
          class="h-14 w-auto object-contain"
        />
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <ul class="flex space-x-4">
          <li v-for="(link, index) in links" :key="index">
            <router-link
              :to="link.path"
              class="mr-5 bg-red-500 text-white font-bold text-[20px] hover:bg-red-600 transition duration-300 py-2 px-4 rounded-md"
              s
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </nav>
    
    </div>
  </header>
</template>

<script>
import Logo from "../../assets/images/netflixlogo.png";
export default {
  data() {
    return {
      links: [
        { name: "Sign In", path: "/signin" },
        
      ],
      Logo,
    };
  },
};
</script>
