<template>
  <div class="mt-n10" style="width: 1000px; margin: auto">
    <v-card style="border-radius: 35px" elevation="10" class="pa-1 mb-16">
      <v-row>
        <v-col cols="6">
          <v-img
            style="
              border-top-left-radius: 30px;
              border-bottom-left-radius: 30px;
            "
            class="image"
            :src="imageSelected"
          >
            <a
              target="_blank"
              :href="metaDataImage.link"
              class="ocultar white--text"
              style="
                display: flex;
                height: 100%;
                width: 100%;
                text-decoration: none;
              "
            >
              <p style="margin: auto" class="font-weight-bold">
                <v-icon color="white">mdi-arrow-top-right</v-icon
                >{{ metaDataImage.username }}.com
              </p>
            </a>
          </v-img>
        </v-col>
        <v-col class="mt-5" cols="6">
          <div class="container d-flex">
            <v-menu
              rounded="xl"
              :close-on-content-click="false"
              transition="no"
              max-width="200"
              left
              offset-y
            >
              <template v-slot:activator="{ on: menu }">
                <v-btn height="50" width="50" icon small v-on="{ ...menu }">
                  <v-icon size="30" color="black">mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>

              <v-list dense>
                <v-list-item
                  v-for="item in items3"
                  :key="item.title"
                  link
                  exact
                >
                  <div class="font-weight-black">{{ item.title }}</div>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu
              rounded="xl"
              :close-on-content-click="false"
              transition="no"
              min-width="380"
              max-width="380"
              left
              offset-x
            >
              <template v-slot:activator="{ on: menu }">
                <v-btn height="50" width="50" icon small v-on="{ ...menu }">
                  <v-icon size="30" color="black">mdi-upload</v-icon>
                </v-btn>
              </template>

              <v-card min-height="520" class="pb-2 pr-4 pl-4" flat>
                <div
                  class="
                    text-center
                    mr-n5
                    pr-10
                    pl-10
                    pb-5
                    font-weight-black
                    pt-5
                  "
                >
                  Enviar este Pin
                </div>
                <div
                  style="display: inline-block"
                  v-for="item in redes"
                  :key="item.title"
                >
                  <v-btn
                    class="mx-4"
                    :color="item.color"
                    width="50"
                    height="50"
                    rounded
                    fab
                    depressed
                  >
                    <v-icon
                      :color="
                        item.title == 'Correo electrónico' ||
                        item.title == 'Copiar enlace'
                          ? 'black'
                          : 'white'
                      "
                      size="35"
                      >{{ item.icon }}</v-icon
                    >
                  </v-btn>
                  <p class="text-center" style="font-size: 11px">
                    {{ item.title }}
                  </p>
                </div>
                <v-text-field
                  dense
                  class="pt-5 mr-3 ml-3"
                  color="grey"
                  prepend-inner-icon="mdi-magnify"
                  label="Nombre o correo"
                  placeholder="Nombre o correo"
                  rounded
                  outlined
                >
                </v-text-field>
                <div>
                  <v-list nav dense>
                    <v-list-item class="pa-2 lista" link>
                      <v-avatar rounded size="45">
                        <v-img src="../assets/pinterest.png" />
                      </v-avatar>
                      <v-list-item-content class="mx-3">
                        <v-list-item-title
                          style="font-size: 15px"
                          class="font-weight-black"
                        >
                          Pinterest México
                        </v-list-item-title>
                        <v-list-item-subtitle class="caption">
                          pinterestmx
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-icon
                        size="20"
                        color="deep-purple"
                        class="white--text align-center"
                      >
                        <v-btn x-small icon class="mx-2 ocultar">
                          <v-icon color="black"> mdi-close </v-icon>
                        </v-btn>
                        <v-btn
                          large
                          depressed
                          class="
                            white--text
                            pa-3
                            align-center
                            text-capitalize
                            font-weight-black
                            rounded-xl
                          "
                          color="#E60023"
                        >
                          Enviar
                        </v-btn>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card>
            </v-menu>
            <v-spacer></v-spacer>
            <v-menu
              rounded="xl"
              :close-on-content-click="false"
              transition="no"
              min-width="380"
              max-width="380"
              left
              offset-x
            >
              <template v-slot:activator="{ on: menu }">
                <v-btn
                  large
                  v-on="{ ...menu }"
                  class="
                    text-lowercase text-center
                    pa-3
                    font-weight-black
                    rounded-xl
                  "
                  depressed
                  color="rgba(0,0,0,0)"
                >
                  beso <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>

              <v-card min-height="520" class="pb-2 pr-4 pl-4" flat>
                <div class="text-center mr-n5 pa-5 font-weight-black pt-5">
                  Guardar
                </div>
                <v-text-field
                  dense
                  class="pt-5 pb-0"
                  color="grey"
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar"
                  placeholder="Buscar"
                  rounded
                  outlined
                >
                </v-text-field>

                <div
                  style="overflow-y: scroll; overflow-x: hidden; height: 300px"
                >
                  <span
                    style="font-size: 11px; color: black"
                    class="font-weight-light"
                    >Todos los tableros
                    <v-list nav dense>
                      <v-list-item class="pa-2 lista" link>
                        <v-avatar rounded size="45">
                          <v-img
                            src="https://i.pinimg.com/200x150/1c/1d/b3/1c1db3ec66c20e4fa34e16cc36dc1601.jpg"
                          />
                        </v-avatar>
                        <v-list-item-content class="mx-3">
                          <v-list-item-title
                            style="font-size: 15px"
                            class="font-weight-bold"
                          >
                            beso
                          </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon
                          size="20"
                          color="deep-purple"
                          class="white--text align-center"
                        >
                          <v-btn
                            large
                            depressed
                            class="
                              ocultar
                              white--text
                              pa-3
                              align-center
                              text-capitalize
                              font-weight-black
                              rounded-xl
                            "
                            color="#E60023"
                          >
                            Guardar
                          </v-btn>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </span>

                  <span
                    style="font-size: 11px; color: black"
                    class="font-weight-light"
                    >Sugerencias</span
                  >
                  <v-list nav dense>
                    <v-list-item
                      v-for="item in items"
                      :key="item.title"
                      link
                      :to="item.path"
                      exact
                      class="pa-2 lista"
                    >
                      <v-avatar color="grey lighten-4" rounded size="45">
                        <v-icon large color="black">mdi-plus</v-icon>
                      </v-avatar>
                      <v-list-item-content class="mx-3">
                        <v-list-item-title
                          style="font-size: 15px"
                          class="font-weight-bold"
                        >
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-icon
                        size="20"
                        color="deep-purple"
                        class="white--text align-center"
                      >
                        <v-btn
                          large
                          depressed
                          class="
                            ocultar
                            white--text
                            pa-3
                            align-center
                            text-capitalize
                            font-weight-black
                            rounded-xl
                          "
                          color="#E60023"
                        >
                          Crear
                        </v-btn>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </div>
                <v-list>
                  <v-list-item link exact class="pa-2 lista">
                    <v-avatar color="grey lighten-4" rounded size="45">
                      <v-icon large color="black">mdi-plus</v-icon>
                    </v-avatar>
                    <v-list-item-content class="mx-3">
                      <v-list-item-title
                        style="font-size: 15px"
                        class="font-weight-bold"
                      >
                        Crear tablero
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-btn
              large
              depressed
              class="
                white--text
                pa-3
                text-capitalize
                font-weight-black
                rounded-xl
              "
              color="#E60023"
            >
              Guardar
            </v-btn>
          </div>
          <a
            class="ml-5 black--text"
            target="_blank"
            :href="metaDataImage.portafolio"
            @click.stop
          >
            {{ metaDataImage.username }}.com
          </a>
          <div class="container ml-2">
            <h1 class="fuente text-capitalize font-weight-bold mb-3">
              {{ metaDataImage.alt_description }} Art by
              {{ metaDataImage.name }} | {{ metaDataImage.username }}
            </h1>
            <p style="color: black; font-size: 15px" class="font-weight-light">
              {{ metaDataImage.description }}
            </p>
          </div>
          <v-layout align-center class="px-3 pt-n2 pb-5">
            <v-avatar size="50" color="deep-purple" class="white--text">
              <v-img :src="metaDataImage.profile_image"> </v-img
            ></v-avatar>

            <v-flex class="ml-3">
              <a
                :href="metaDataImage.link"
                target="_blank"
                class="subtitle-2 black--text"
                >{{ metaDataImage.username }}</a
              >
              <div class="body-2 black--text font-weight-light">
                {{ this.followers.length }} seguidores
              </div>
              <div class="body-2 black--text font-weight-light">
                <v-icon small>mdi-heart</v-icon> {{ metaDataImage.likes }} Likes
              </div>
            </v-flex>
          </v-layout>
          <v-tabs v-model="tab" color="basil">
            <v-tab
              class="text-capitalize font-weight-black"
              v-for="item in items2"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-items class="mt-2" v-model="tab">
            <v-tab-item>
              <v-card
                style="display: inline-block"
                v-for="n in 4"
                :key="n"
                class="mx-1 rounded-lg"
                height="100"
                width="100"
                flat
              >
                <v-scale-transition>
                  <v-img
                    class="ma-auto pt-auto"
                    width="100%"
                    height="100%"
                    :src="imageSelected"
                    color="white"
                  ></v-img>
                </v-scale-transition>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="mx-5" flat>
                <span class="caption black--text pb-2">
                  {{ text }}
                </span>
                <v-row align="center">
                  <v-col cols="2">
                    <v-btn class="mx-5" :to="{ name: 'Perfil' }" icon>
                      <v-avatar size="50">
                        <v-img
                          src="https://yt3.ggpht.com/yti/ANoDKi5_odyECtfr2p7Xtqd0W8JirwA4weRl2ILE3u2g=s108-c-k-c0x00ffffff-no-rj"
                        ></v-img>
                      </v-avatar>
                    </v-btn>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      class="pt-5 ma-0"
                      color="grey"
                      label="Agregar un comentario"
                      placeholder="Agregar un comentario"
                      rounded
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tab: null,
      model: null,
      text: "Comparte tus comentarios, haz preguntas o haz un cumplido.",
      followers: 0,
      accessKey: "tPCRncI1a8YnFX2sMc1SaysPZahaK6HuYkJfnc8Zk4g",
      redes: [
        {
          title: "WhatsApp",
          icon: "mdi-whatsapp",
          color: "#00bb2d",
        },
        {
          title: "Facebook",
          icon: "mdi-facebook",
          color: "#3b5998",
        },
        {
          title: "Twitter",
          icon: "mdi-twitter",
          color: "#00acee",
        },
        {
          title: "Correo electrónico",
          icon: "mdi-email",
          color: "grey lighten-3",
        },
        {
          title: "Copiar enlace",
          icon: "mdi-link-variant",
          color: "grey lighten-3",
        },
      ],
      items: [
        {
          title: "Fotografia",
        },
        {
          title: "Fotografias digitales",
        },
        {
          title: "Arte afro",
        },
        {
          title: "Retratos",
        },
        {
          title: "Oscuridad",
        },
        {
          title: "Naturaleza humana",
        },
      ],
      items2: ["Fotos", "Comentarios"],
      items3: [
        {
          title: "Descargar imagen",
        },
        {
          title: "Ocultar Pin",
        },
        {
          title: "Reportar Pin",
        },
        {
          title: "Obtener el código de integración del Pin",
        },
      ],
    };
  },
  created() {
    this.getFollowers();
  },
  methods: {
    getFollowers() {
      axios
        .get(this.metaDataImage.followers + `/?client_id=${this.accessKey}`)
        .then((response) => {
          this.followers = response.data;
        })
        .catch((e) => console.log("error", e));
    },
  },
  computed: {
    ...mapState(["imageSelected", "metaDataImage"]),
  },
};
</script>

<style lang="scss" scoped>
.lista {
  cursor: pointer;
}
.ocultar {
  opacity: 0;
  transition-duration: 0ms;
}
.lista:hover {
  .ocultar {
    opacity: 1;
    transition-duration: 0ms;
  }
}
.image:hover {
  filter: brightness(70%);
  cursor: pointer;
  .ocultar {
    opacity: 1;
    transition-duration: 0ms;
  }
}
.fuente {
  line-height: 130%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ,
    Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>