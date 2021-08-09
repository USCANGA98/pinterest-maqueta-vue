<template>
  <v-app>
    <v-main>
      <v-btn style="margin-top: 100px; margin-left: 25px" :to="{name: 'Home'}" exact icon v-if="$route.name != 'Home'">
        <v-icon color="black">mdi-arrow-left-thick</v-icon>
      </v-btn>
      <BarraNavegacion />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import BarraNavegacion from "./components/BarraNavegacion";

export default {
  name: "App",

  components: {
    BarraNavegacion,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
</style>
