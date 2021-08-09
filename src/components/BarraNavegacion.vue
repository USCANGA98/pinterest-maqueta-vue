<template>
  <div>
    <v-app-bar
      class="pl-3"
      color="white"
      elevate-on-scroll
      fixed
      height="80"
      app
    >
      <v-btn icon
        ><v-img
          max-height="24"
          max-width="24"
          src="../assets/pinterest.png"
        ></v-img
      ></v-btn>

      <v-btn
        large
        active-class="black white--text"
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        text
        class="black--text pa-3 text-capitalize font-weight-black rounded-xl"
      >
        {{ item.title }}
      <v-badge color="red" dot inline v-show="$route.name != 'Home' && item.path != '/hoy'"></v-badge>
      </v-btn>

      <v-text-field
        @keyup.enter="buscarImagen()"
        dense
        class="mt-8 ml-2"
        rounded
        clearable
        v-model="query"
        color="grey"
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        filled
      ></v-text-field>

      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="slide-y-transition"
        min-width="380"
        offset-y
        right
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn icon v-on="{ ...menu }">
            <v-icon color="grey darken-2">mdi-bell</v-icon>
          </v-btn>
        </template>

        <v-card style="border-radius: 15px" min-height="550" class="pb-2" flat>
          <div class="text-center font-weight-bold pt-5">Actualizaciones</div>
          <div class="d-flex justify-center align-center">
            <svg
              style="margin-top: 120px"
              width="156"
              height="156"
              viewBox="0 0 156 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.73597 118.92C-6.85813 112.364 3.39896 74.1199 9.06316 60.4621C16.6599 60.4621 34.886 40.5078 43.0491 24.1182C65.7059 20.0211 103.223 32.1097 118.016 29.2416C132.81 26.3735 153.334 64.4095 156 94.286V132.186C156 141.918 81.5324 135.259 70.5371 132.186C59.5419 129.113 23.7286 127.114 6.73597 118.92Z"
                fill="#D3E6F4"
              ></path>
              <path
                d="M122.876 65.6959L109.637 96.4489C114.439 106.483 114.166 121.969 111.732 128.794L20.124 94.765C21.828 89.9869 34.1086 76.6429 44.1069 72.1068L53.3339 39.8634C53.3339 39.8634 81.2047 14.6653 99.3003 21.3872C106.031 23.8876 113.537 27.6322 117.839 36.2895C117.839 36.2895 123.669 60.1554 122.876 65.6959Z"
                fill="#1F4F60"
              ></path>
              <path
                d="M77.5664 126.922C74.7434 134.837 64.1584 135.852 58.4133 136.037C57.9123 136.053 49.808 129.362 49.808 129.362C48.2419 125.427 48.0668 120.458 49.4821 116.489L64.2544 119.658L77.5664 126.922Z"
                fill="#1F4F60"
              ></path>
              <path
                d="M143.149 38.668L140.613 46.8725L133.858 47.613L140.613 52.4263V58.1843L145.258 53.869L153.987 52.4263L146.526 47.613L145.258 43.5471L143.149 38.668Z"
                fill="#FFCF7F"
              ></path>
              <path
                d="M102.8 16.0723L98.5471 24.1121L92.5938 25.0173L98.5471 29.8305L99.3483 35.5886L103.993 31.2733L112.723 29.8305L103.993 25.0173V20.9514L102.8 16.0723Z"
                fill="#FFCF7F"
              ></path>
              <path
                d="M117.081 58.2247L122.494 38.668L125.602 56.8515L135.871 63.3778L123.614 67.3762L121.385 73.6091L117.081 80.7823V69.2873L104.671 59.7252L117.081 58.2247Z"
                fill="#FFCF7F"
              ></path>
            </svg>
          </div>

          <h3 class="text-center mt-5">Aún no hay nada</h3>
          <div class="text-center ma-auto" style="width: 300px">
            <p>
              Intenta explorar tu feed de inicio, crear un tablero o seguir a
              alguien que tenga ideas que te inspiren.
            </p>
          </div>
        </v-card>
      </v-menu>
      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="slide-y-transition"
        min-width="380"
        max-width="380"
        offset-y
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn icon v-on="{ ...menu }">
            <v-icon color="grey darken-2">mdi-chat-processing</v-icon>
          </v-btn>
        </template>

        <v-card min-height="550" class="pb-2 pr-4 pl-4" flat>
          <v-row>
            <v-col cols="8">
              <div class="text-right mr-n5 font-weight-bold pt-5">
                Bandeja de entrada
              </div>
            </v-col>
            <v-col class="pt-5" cols="4">
              <v-btn height="50" width="50" icon color="black">
                <v-icon>mdi-dots-horizontal </v-icon>
              </v-btn>
              <v-btn height="50" width="50" icon color="black">
                <v-icon>mdi-pencil </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <div style="width: 90%" class="d-flex justify-left">
            <h1 style="font-weight: 700; font-size: 35px">
              Comparte ideas con amigos
            </h1>
          </div>

          <div>
            <v-text-field
              dense
              class="pt-5"
              color="grey"
              prepend-inner-icon="mdi-magnify"
              label="Buscar por nombre o correo"
              placeholder="Buscar por nombre o correo"
              rounded
              outlined
            >
            </v-text-field>
          </div>
          <div>
            <span style="font-size: 13px" class="font-weight-light">Sugerencias</span>
          </div>
          <v-list class="mx-n1">
            <v-list-item class="pa-2" link>
              <v-avatar size="50">
                <v-img src="../assets/pinterest.png" />
              </v-avatar>
              <v-list-item-content class="mx-3">
                <v-list-item-title style="font-size: 15px" class="font-weight-bold"> Pinterest México </v-list-item-title>
                <v-list-item-subtitle class="caption"> Siguiendo </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon
                size="20"
                color="deep-purple"
                class="white--text justify-center"
              >
                <v-icon>mdi-close</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn :to="{name: 'Perfil'}" icon>
        <v-avatar size="24">
          <v-img
            src="https://yt3.ggpht.com/yti/ANoDKi5_odyECtfr2p7Xtqd0W8JirwA4weRl2ILE3u2g=s108-c-k-c0x00ffffff-no-rj"
          ></v-img>
        </v-avatar>
      </v-btn>
      <v-app-bar-nav-icon
        color="grey darken-2"
        @click.stop="mostrarNavigationDrawer = !mostrarNavigationDrawer"
      />

      <v-menu
        rounded="xl"
        :close-on-content-click="false"
        transition="no"
        min-width="280"
        offset-y
        left
      >
        <template v-slot:activator="{ on: menu }">
          <v-btn icon small v-on="{ ...menu }">
            <v-icon color="grey darken-2">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-card class="pb-2" flat>
          <div class="caption pl-5 pt-4 pb-0">Cuentas</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items2" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
            </v-list-item>
          </v-list>
          <div class="caption pl-5 pt-4 pb-0">Más opciones</div>
          <v-list dense class="ml-2 mr-2 pt-0 pb-0">
            <v-list-item v-for="item in items3" :key="item.title" link exact>
              <div class="font-weight-black">{{ item.title }}</div>
              <v-spacer />
              <v-icon color="black">{{ item.icon }}</v-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <NavigationDrawer
      :drawer="mostrarNavigationDrawer"
      @cerrar="mostrarNavigationDrawer = false"
    />
  </div>
</template>

<script>
import NavigationDrawer from "../components/NavigationDrawer.vue";
export default {
  data() {
    return {
      query: "",
      mostrarNavigationDrawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Inicio",
          path: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Hoy",
          path: "/hoy",
        },
      ],
      items2: [
        {
          title: "Agregar cuenta",
        },
        {
          title: "Convertir en cuenta para empresa",
        },
      ],
      items3: [
        {
          title: "Configuración",
        },
        {
          title: "Mejora tu feed de inicio",
        },
        {
          title: "Instalar la aplicación de Windows",
        },
        {
          title: "Obtener ayuda",
          icon: "mdi-arrow-top-right",
        },
        {
          title: "Ver condiciones y privacidad",
          icon: "mdi-arrow-top-right",
        },
        {
          title: "Salir",
        },
      ],
    };
  },
  components: {
    NavigationDrawer,
  },

  methods: {
    buscarImagen() {
      this.$emit("query", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>