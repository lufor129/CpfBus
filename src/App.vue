<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="blue darken-1"
      dark
    >
      <v-toolbar-title >{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      shift
    >
      <v-btn dark v-for="(item,key,index) in links" :key="index" :to="item">
        <span>{{key}}</span>
        <v-icon>{{icons(index)}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      fixed:"true",
      title: '智慧水族箱',
      links: {
        '時間':"/",
        '路徑':"/route",
        '地圖':"/map"
      },
      bottomNav: 0
    }
  },
  methods:{
    icons:function(index){
      switch (index) {
        case 0: return 'insert_invitation'
        case 1: return 'fas fa-route'
        case 2: return 'fas fa-map-marked-alt'
      }
    }
  },
  computed:{
    color () {
      switch (this.bottomNav) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
      }
    },
  }
}
</script>
