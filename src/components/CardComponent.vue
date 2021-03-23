<template>
  <v-card
    :href="meta.urlAddress"
    target="_blank"
    flat
    ripple
    class="rounded-xl"
  >
    <v-img style="border-radius: 20px" :src="url"> </v-img>
    <v-layout align-center class="px-3 pt-3 pb-2">
      <v-avatar size="40" color="deep-purple" class="white--text">
        <v-img :src="meta.profileImageUrl"> </v-img
      ></v-avatar>

      <v-flex class="ml-3">
        <div class="subtitle-2">{{ meta.name }}</div>
        <div class="body-2 grey--text text--darken-1">
          {{ meta.occupation }}
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: {
    url: {
      type: String,
      default: function () {
        return "";
      },
    },
    meta: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>