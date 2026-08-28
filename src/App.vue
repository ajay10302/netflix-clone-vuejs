<template>
  <div class="min-h-screen">
    <Header />
      <main class="bg-gradient-to-b from-red-900 to-black to-80% min-h-screen">
        <router-view />
      </main>
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
