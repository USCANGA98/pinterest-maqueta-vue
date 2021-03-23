<template>
  <v-app>
    <v-main>
      <NavigationDrawer />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";

export default {
  name: "App",

  components: {
    NavigationDrawer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
</style>
