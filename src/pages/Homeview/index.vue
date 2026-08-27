<template>
  <section class="pt-60  bg-[url(./assets/images/banner.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
    <Header/>
    <div class="container mx-auto px-3 ">

      <div class="h-screen w-screen bg-black/50 absolute top-0 left-0 z-1"></div>
         <Heroview />
   
      </div>
  </section>
</template>


<script>
import Header from '../../components/header/header.vue';
import Heroview from './Components/Heroview.vue'

export default {
  components: {
    Header,
    Heroview,
  },
};


</script>