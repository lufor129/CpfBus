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
      <v-btn dark v-for="(item,key,index) in links" :key="index" :disabled="clickable(index)" :to="item" >
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
      bottomNav: 0,
      RightHour:0,
      RightMin:0,
    }
  },
  methods:{
    icons:function(index){
      switch (index) {
        case 0: return 'insert_invitation'
        case 1: return 'fas fa-route'
        case 2: return 'fas fa-map-marked-alt'
      }
    },
    clickable(id){
      if(this.RouteID!='' && this.StationID !=''){
        return false;
      }else{
        if(id == 1 || id == 2){
          return true;
        }
        return false;
      }
    },
    showTime(){
      const dt = new Date();
      this.RightHour = dt.getHours();
      this.RightMin = dt.getMinutes();
    },
    refresh(){
      setInterval(()=>{
        this.checkTime();
      },1000*20);
    },
    checkTime(){
      if(this.BusTime!='' ){
        this.showTime();
        let time = this.BusTime.split(":");
        let gap = ((Number(time[0])-this.RightHour)*60+(Number(time[1])-this.RightMin));
        //changeColor(15,20,77);
        switch(true){
          case gap<0 : break;
          case gap==0 : console.log("抵達中"); break;
          case gap<=2 : console.log("2"); break;
          case gap<=4 : console.log("4"); break;
          case gap<=7 : console.log("7"); break;
          case gap<=10: console.log("10"); break;
          default: console.log("default");
        }
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
    RouteID(){
      return this.$store.state.RouteID;
    },
    StationID(){
      return this.$store.state.StationID;
    },
    BusTime(){
      return this.$store.state.BusTime;
    }
  },
  created(){
    this.refresh();
  },
  watch:{
    BusTime(){
      this.checkTime();
    }
  }
}
</script>
