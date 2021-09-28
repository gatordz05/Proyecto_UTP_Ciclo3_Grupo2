<template>
  <v-app>
    <Barra/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
 </template>

<script>
import Barra from './components/Barra.vue'
export default {
  name: 'App',
  components:{
    Barra,
  },
  data: () => ({
    //
  }),
};
</script>
