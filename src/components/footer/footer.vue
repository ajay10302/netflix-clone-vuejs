<template>
 <footer class="bg-black pt-20 pb-8">
    <div
      class="container w-full max-w-[1200px] mx-auto "
    >
     <div class="px-5 ">

       <a
       href="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          :src="Logo"
          alt="Logo"
          class="h-8 w-auto object-contain"
          />
        </a>
      </div>



       <div class="flex flex-wrap py-5 px-5 flex-col md:flex-row items-center">
         <p class="text-white text-[14px] mt-4">© 2026 Ajay through Netflix ❤️. All rights reserved.</p>
          <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <ul class="flex space-x-4">
          <li v-for="(link, index) in links" :key="index">
            <router-link
              :to="link.path"
              class="  text-white text-[14px] hover:text-red-600 transition duration-300"
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </nav>
      </div>
    </div>
   
  </footer>
</template>

<script>
import Logo from "../../assets/images/netflixlogo.png";
export default {
  data() {
    return {
      links: [
        { name: "Terms of Service", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Contact Us", path: "/contact" },
      ],
      Logo,
    };
  },
};
</script>
