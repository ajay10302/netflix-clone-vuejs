<template>
  <header class="text-gray-600 body-font bg-orange-700">
    <div
      class="container mx-auto flex flex-wrap py-5 px-3 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          :src="Logo"
          alt="Logo"
          class="bg-white rounded-md h-10 p-1 object-cover"
        />
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <ul class="flex space-x-4">
          <li v-for="(link, index) in links" :key="index">
            <router-link
              :to="link.path"
              class="mr-5 text-white hover:text-gray-900"
              s
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </nav>
      <button
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import Logo from "../../assets/images/netflixlogo.png";
export default {
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
      Logo,
    };
  },
};
</script>
