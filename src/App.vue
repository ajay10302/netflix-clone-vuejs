<template>
  <div class="min-h-screen">
    <Header />
    
    <div class="bg-[url(./assets/images/banner.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
      <main class="container mx-auto px-3 ">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
export default {
  components: {
    Header,
  },
};
</script>
