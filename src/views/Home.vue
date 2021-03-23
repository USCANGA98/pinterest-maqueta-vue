<template>
  <div class="ml-12 mr-12">
    <stack :column-min-width="210" :gutter-width="16" :gutter-height="50">
      <stack :column-min-width="210" :gutter-width="16" :gutter-height="50">
        <stack-item
          style="transition: transform 300ms"
          v-for="(item, i) in itemsVideo"
          :key="i"
        >
          <VideoComponent :urlVideo="item.urlVideo" />
        </stack-item>
      </stack>
      <stack-item
        style="transition: transform 300ms"
        v-for="(item, i) in items"
        :key="i"
      >
        <CardComponent
          :url="item.url"
          :meta="{
            name: item.name,
            occupation: item.occupation,
            profileImageUrl: item.profileImageUrl,
            urlAddress: item.urlAddress,
          }"
        />
      </stack-item>
    </stack>
    <v-row>
      <v-col cols="3" v-for="(item, i) in items" :key="i"> </v-col>
    </v-row>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import VideoComponent from "../components/VideoComponent";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  data() {
    return {
      items: [
        {
          url:
            "https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",

          name: "Luis Angel",
          occupation: "Software Developer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },

        {
          url:
            "https://images.unsplash.com/photo-1511407401960-0ee203836665?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Francisco Miguel Montoro",
          occupation: "Liason",
          profileImageUrl:
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1511407401960-0ee203836665?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://i.pinimg.com/564x/83/5f/4d/835f4d21d6a490b51c1e49e357b7d19f.jpg",
          name: "Oscar Ramirez",
          occupation: "Director UT",
          profileImageUrl:
            "https://i.pinimg.com/564x/35/a5/b8/35a5b8d3864cc9db051462acf4d1ba9e.jpg",
          urlAddress:
            "https://i.pinimg.com/564x/83/5f/4d/835f4d21d6a490b51c1e49e357b7d19f.jpg",
        },
        {
          url:
            "https://images.unsplash.com/photo-1509817775895-79efefb813d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Mauricio Abad",
          occupation: "Supervisor",
          profileImageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          urlAddress:
            "https://images.unsplash.com/photo-1509817775895-79efefb813d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1522258493909-bf27c8ebd64a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Ruben Fernndez",
          occupation: "Associate",
          profileImageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1522258493909-bf27c8ebd64a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1522093243371-296c79a66df4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Adan Valle",
          occupation: "Executive",
          profileImageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          urlAddress:
            "https://images.unsplash.com/photo-1522093243371-296c79a66df4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },

        {
          url:
            "https://images.unsplash.com/photo-1542325828505-734937aa2040?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Dario Fraile",
          occupation: "Officer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1542325828505-734937aa2040?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1548623826-a1aa0a4d8a5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
          name: "Juan Dios Granados",
          occupation: "Manager",
          profileImageUrl:
            "https://images.unsplash.com/photo-1548623826-a1aa0a4d8a5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

          urlAddress:
            "https://images.unsplash.com/photo-1548623826-a1aa0a4d8a5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1520821586179-a7a385eb261a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Luis Heredia",
          occupation: "Engineer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1520821586179-a7a385eb261a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1508979215797-e1249a67d9a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Adolfo Monteagudo",
          occupation: "Specialist",
          profileImageUrl:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1508979215797-e1249a67d9a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1580334317510-ccad4f66e249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Mustapha Royo",
          occupation: "Director",
          profileImageUrl:
            "https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1580334317510-ccad4f66e249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1591499182728-c66ba8220ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Carlos Javier Miguel",
          occupation: "Coordinator",
          profileImageUrl:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1591499182728-c66ba8220ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1563657296610-d0459418a7a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQwfHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Paulino Mari",
          occupation: "Administrator",
          profileImageUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1563657296610-d0459418a7a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQwfHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1495110265292-6a567e7246d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Jesus Miguel Ortega",
          occupation: "Architect",
          profileImageUrl:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1495110265292-6a567e7246d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          name: "Ismael Campos",
          occupation: "Analyst",
          profileImageUrl:
            "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=703&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          url:
            "https://images.unsplash.com/photo-1554710869-95f3df6a3197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80",
          name: "Antoni Reina",
          occupation: "Designer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1554710869-95f3df6a3197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80",
        },
        {
          url:
            "https://images.unsplash.com/photo-1512036594830-51cea3a8df78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Aaron Rial",
          occupation: "Planner",
          profileImageUrl:
            "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1512036594830-51cea3a8df78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1523512090443-2d7df8b40358?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Gaspar Lopez",
          occupation: "Synergist",
          profileImageUrl:
            "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1523512090443-2d7df8b40358?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1572253765558-ed6413a68da5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Andoni Ferre",
          occupation: "Orchestrator",
          profileImageUrl:
            "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1572253765558-ed6413a68da5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1592911843376-c86076523cc3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Ismael Amado",
          occupation: "Technician",
          profileImageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1592911843376-c86076523cc3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1553521756-74004ab1e8bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Jose Joaquin Menendez",
          occupation: "Developer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=402&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1553521756-74004ab1e8bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1552353288-5405ac4846f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Luis Antonio Moron",
          occupation: "Producer",
          profileImageUrl:
            "https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1552353288-5405ac4846f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Joel Barea",
          occupation: "Consultant",
          profileImageUrl:
            "https://images.unsplash.com/photo-1437623889155-075d40e2e59f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1511215579272-6192432f83bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          name: "Julio Cesar Sancho",
          occupation: "Assistant",
          profileImageUrl:
            "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=367&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1511215579272-6192432f83bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1607662562783-9aeb834e23e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          name: "Mateo Souto",
          occupation: "Facilitator",
          profileImageUrl:
            "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=367&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1607662562783-9aeb834e23e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1541731290388-9860b1466aa6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5lcGFsfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60",
          name: "Hugo Saez",
          occupation: "Agent",
          profileImageUrl:
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1541731290388-9860b1466aa6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5lcGFsfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1500269062855-0d9c4410af0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Adan Olivera",
          occupation: "Representative",
          profileImageUrl:
            "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1500269062855-0d9c4410af0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1610423002339-340b7bbd8bfa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Anton Vela",
          occupation: "Strategist",
          profileImageUrl:
            "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1610423002339-340b7bbd8bfa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1602992430520-105cf38b9e3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Pedro Pablo Sanjuan",
          occupation: "doctor",
          profileImageUrl:
            "https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1602992430520-105cf38b9e3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Alexandre Bonilla",
          occupation: "plumber",
          profileImageUrl:
            "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1572989994359-ae5afc3a3efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWV4aWNvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Damian Alarcon",
          occupation: "artist",
          profileImageUrl:
            "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1572989994359-ae5afc3a3efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWV4aWNvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1550815043-7fcead93a615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Ion Correa",
          occupation: "cabalier",
          profileImageUrl:
            "https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1550815043-7fcead93a615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Josep Maria Zamorano",
          occupation: "runner's car",
          profileImageUrl:
            "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://images.unsplash.com/photo-1522092787785-60123fde65c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          name: "Teofilo Ibañez",
          occupation: "Motorcyclist",
          profileImageUrl:
            "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          urlAddress:
            "https://images.unsplash.com/photo-1522092787785-60123fde65c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          url:
            "https://i.pinimg.com/564x/cd/03/d2/cd03d2b301b5ade66e7b4e4674c155a2.jpg",
          name: "Mark Ruffalo",
          occupation: "Medic",
          profileImageUrl:
            "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=",
          urlAddress:
            "https://i.pinimg.com/564x/cd/03/d2/cd03d2b301b5ade66e7b4e4674c155a2.jpg",
        },
        {
          url:
            "https://images.unsplash.com/photo-1535159530326-d7bf54bfb24e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80",
          name: "Sam Raimi",
          occupation: "Director TI",
          profileImageUrl:
            "https://i.pinimg.com/564x/60/2b/3f/602b3f2bd1c6ed861ea390ad679c380a.jpg",
          urlAddress:
            "https://images.unsplash.com/photo-1535159530326-d7bf54bfb24e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80",
        },

        //

        // "",
        // "https://images.unsplash.com/photo-1509817775895-79efefb813d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1522258493909-bf27c8ebd64a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1522093243371-296c79a66df4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1511407401960-0ee203836665?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1542325828505-734937aa2040?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1548623826-a1aa0a4d8a5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1leGljb3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1520821586179-a7a385eb261a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1508979215797-e1249a67d9a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1580334317510-ccad4f66e249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1591499182728-c66ba8220ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1563657296610-d0459418a7a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQwfHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1495110265292-6a567e7246d5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxtZXhpY298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        // "https://images.unsplash.com/photo-1554710869-95f3df6a3197?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80",
        // "https://images.unsplash.com/photo-1512036594830-51cea3a8df78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1523512090443-2d7df8b40358?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1572253765558-ed6413a68da5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1592911843376-c86076523cc3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1553521756-74004ab1e8bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1552353288-5405ac4846f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        // "https://images.unsplash.com/photo-1511215579272-6192432f83bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        // "https://images.unsplash.com/photo-1607662562783-9aeb834e23e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        // "https://images.unsplash.com/photo-1541731290388-9860b1466aa6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5lcGFsfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1500269062855-0d9c4410af0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1610423002339-340b7bbd8bfa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1602992430520-105cf38b9e3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fG5lcGFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1572989994359-ae5afc3a3efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWV4aWNvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1550815043-7fcead93a615?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        // "https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG1leGljb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      ],
      itemsVideo: [
        {
          urlVideo:
            "https://assets.pinterest.com/ext/embed.html?id=1125968647339025",
        },
        {
          urlVideo:
            "https://assets.pinterest.com/ext/embed.html?id=13088655157748439",
        },
        {
          urlVideo:
            "https://assets.pinterest.com/ext/embed.html?id=33706697201057702",
        },

        // https://assets.pinterest.com/ext/embed.html?id=13088655157748439
      ],
    };
  },
  components: {
    CardComponent,
    VideoComponent,
    Stack,
    StackItem,
  },
};
</script>

<style lang="scss" scoped>
</style>