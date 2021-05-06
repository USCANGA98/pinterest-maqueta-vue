<template>
  <div class="ml-5 mr-5">
    <v-text-field
      dense
      class="mt-8 ml-2"
      rounded
      clearable
      v-model="query"
      color="grey"
      prepend-inner-icon="mdi-magnify"
      @keyup.enter="buscarImagen"
      label="Buscar"
      filled
    ></v-text-field>

    <stack :column-min-width="210" :gutter-width="16" :gutter-height="50">
      <stack-item
        style="transition: transform 300ms"
        v-for="(item, i) in api"
        :key="i"
      >
        <CardComponent
          :api="item.urls.regular"
          :meta="{
            name: item.user.name,
            profile_image: item.user.profile_image.medium,
          }"
        />
      </stack-item>
    </stack>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  data() {
    return {
      api: "",
      urlUnsplash: "https://api.unsplash.com/search/photos/",
      accessKey: "tPCRncI1a8YnFX2sMc1SaysPZahaK6HuYkJfnc8Zk4g",
      query: "random",
    };
  },
  mounted() {
    this.getDataApi();
  },
  methods: {
    getDataApi() {
      axios
        .get(
          this.urlUnsplash +
            `?query=${this.query}&` +
            `client_id=${this.accessKey}`
        )
        .then((response) => {
          this.api = response.data.results;
        })
        .catch((e) => console.log("error", e));
    },
    buscarImagen() {
      let query = this.query;
      axios
        .get(
          this.urlUnsplash +
            `?query=${this.query}&` +
            `client_id=${this.accessKey}`
        )
        .then((response) => {
          console.log(response);
          this.api = response.data.results;
        })
        .catch((e) => console.log("error", e));
      console.log(query);
      return this.getDataApi();
    },
  },
  components: {
    CardComponent,
    Stack,
    StackItem,
  },
};
</script>

<style lang="scss" scoped>
</style>