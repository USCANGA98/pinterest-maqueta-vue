<template>
  <div>
    <BarraNavegacion @query="buscarImagen" />
    <stack
      style="margin: auto; width: 92%"
      :column-min-width="210"
      :gutter-width="16"
      :gutter-height="50"
    >
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
            username: item.user.username,
            portafolio: item.user.portfolio_url,
            alt_description: item.alt_description,
            description: item.description,
            link: item.user.links.html,
            followers: item.user.links.followers,
            likes: item.likes,
            download: item.links.download,
          }"
        />
      </stack-item>
    </stack>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import BarraNavegacion from "../components/BarraNavegacion";
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  data() {
    return {
      api: "",
      urlUnsplash: "https://api.unsplash.com/search/photos/",
      accessKey: "tPCRncI1a8YnFX2sMc1SaysPZahaK6HuYkJfnc8Zk4g",
      query: "nepal",
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
    buscarImagen($event) {
      this.query = $event;
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
      console.log(this.query);
      return this.getDataApi();
    },
  },
  components: {
    CardComponent,
    Stack,
    StackItem,
    BarraNavegacion,
  },
};
</script>

<style lang="scss" scoped>
</style>