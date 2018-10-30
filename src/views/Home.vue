<template>
  <v-container fluid grid-list-lg>
    <loading :active.sync="isLoading"></loading>
    <v-layout row wrap align-center >
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline font-weight-regular green darken-2 white--text">公車車號</v-card-title>
          <v-card-text>
            <v-subheader class="pa-0">車種
              <v-btn color="red" @click="bustype='紅';select='';selectStation=''" fab dark small>紅</v-btn>
              <v-btn color="orange"  @click="bustype='橘';select='';selectStation=''" fab dark small>橘</v-btn>
              <v-btn color="warning"  @click="bustype='幹線';select='';selectStation=''" fab dark small>幹線</v-btn>
              <v-btn color="info"  @click="bustype='快線';select='';selectStation=''" fab dark small>快線</v-btn>
              <v-btn color="green"  @click="bustype='all';select='';selectStation=''" fab dark small>全</v-btn>
            </v-subheader>
            <v-autocomplete
              v-model="select"
              :items="filterItem"
              item-text="nameZh"
              item-value="ID"
              @change="getObj"
              required
              label="公車路線"
            >
            <template
                slot="item"
                slot-scope="data"
              >
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.nameZh"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.ddesc"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </template>
            </template>
            </v-autocomplete>
            <v-select
              :items="stations"
              label="站名"
              required
              item-text="nameZh"
              item-value="SID"
              v-model="selectStation"
              v-if="select!=''"
              @change="getLastTime"
            ></v-select>
            <v-img v-if="selectBus!= {}"
              :src="selectBus.routeMapImageUrl"
            >
            </v-img>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card v-if="selectStation!=''">
          <v-card-title class="headline font-weight-regular green darken-3  white--text" v-if="comeBus.comeTime!=''" >下一班時間 : {{comeBus.comeTime}}</v-card-title>
          <v-card-title class="headline font-weight-regular green darken-3  white--text" v-else>已經沒班次咯</v-card-title>
          <!-- <v-card-text>
            <v-time-picker v-model="time"  full-width color="green lighten-1"></v-time-picker>

          </v-card-text> -->
        </v-card>
      </v-flex> 
    </v-layout>
    <v-layout row >
      <v-btn color="success" @click="checkInput">儲存</v-btn>
      <v-btn color="error" @click="clearAll">重設</v-btn>
    </v-layout>
    <v-layout v-if="myFavorite.length!=0">
      <v-flex>
        <v-select
          :items="myFavorite"
          item-text="Name"
          menu-props="auto"
          item-value="Route"
          label="Select"
          prepend-icon="fas fa-heart"
          color="red"
          v-model="favorite"
          @change="chooseFavorite"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      color="warning"
      :timeout=1000
    >
      {{text}}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default{
  name:"Home",
  components:{
    Loading
  },
  data(){
    return{
      items:[1,2,3],
      time:null,
      selectBus:{},
      bustype:"all",
      stations:[],
      selectStation:"",
      snackbar:false,
      text:"",
      comeBus:{},
      select:"",
      isLoading:false,
      myFavorite:[],
      favorite:null
    }
  },
  created(){
    this.isLoading = true;
    const vm =this;
    this.$http.get(`${process.env.VUE_APP_API}/bus`).then((response)=>{
      let temp = response.data.BusDynInfo.BusInfo.Route;
      vm.items = temp;
      vm.isLoading = false;
    })
    if(this.$store.state.StationID!='' && this.$store.state.RouteID){
      this.refresh();
      this.repeatRefresh();
    }
    
    let myFavorite = JSON.parse(localStorage.getItem("myFavorite"));
    if(myFavorite == undefined){
      this.myFavorite = [];
      localStorage.setItem('myFavorite',JSON.stringify([]));
    }else{
      this.myFavorite = myFavorite;
    }
  },
  methods:{
    getObj(e){
      this.selectStation='';
      this.items.forEach((item,index)=>{
        if(item.ID == this.select){
          this.selectBus = item;
        }
      })
      this.$http.get(`${process.env.VUE_APP_API}/station?id=${this.selectBus.ID}`).then((response)=>{
        let temp = response.data.BusDynInfo.BusInfo.Stop;
        this.stations = temp;
      })
    },
    chooseFavorite(){
      const vm = this;
      this.select = this.favorite.ID;
      let station = this.favorite.SID;
      this.$http.get(`${process.env.VUE_APP_API}/station?id=${vm.select}`).then((response)=>{
        vm.stations = response.data.BusDynInfo.BusInfo.Stop;
        vm.selectStation = station;
        vm.getLastTime();
      })
    },
    clearAll(){
      changeColor(255,255,255);
      this.bustype="all";
      this.selectBus={};
      this.time=null;
      this.select="";
      this.selectStation="";
      this.stations=[];
      this.$store.dispatch("storeRoute",this.select);
      this.$store.dispatch("storeStation",this.selectStation);
    },
    checkInput(){
      this.text = '';
      if(this.select =='' || this.selectStation == ''){
        this.text = " 資料不完整"
      }else if(this.comeBus.comeTime==''){
        this.text = "已經沒公車了喔";
      }else{
        this.$store.dispatch("storeRoute",this.select);
        this.$store.dispatch("storeStation",this.selectStation);
        this.$store.dispatch("setBusTime",this.comeBus.comeTime);
        let myFavorites = JSON.parse(localStorage.getItem('myFavorite'));
        let saveItem = {Route:{
          ID:this.select,
          SID : this.selectStation,
        },
          Name:`${this.selectBus.nameZh} -- ${this.comeBus.StopName}`
        };
        let flag = false;
        myFavorites.forEach(item=>{
          if(item.Route.ID == this.select && item.Route.SID == this.selectStation) flag=true;
        })
        if(flag == false){
          myFavorites.push(saveItem);
          localStorage.setItem("myFavorite",JSON.stringify(myFavorites));
          this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
        }
        this.text="資料已儲存";
        this.repeatRefresh();
      }
      this.snackbar = true;
    },
    getLastTime(){
      const vm = this;
      this.$http.get(`${process.env.VUE_APP_API}/getLastTime?RID=${vm.select}&BID=${vm.selectStation}`).then((response)=>{
        vm.comeBus = response.data;
      })
    },
    refresh(){
      const vm = this;
      let route = this.$store.state.RouteID;
      this.select = route;
      let station = this.$store.state.StationID;
      this.$http.get(`${process.env.VUE_APP_API}/station?id=${route}`).then((response)=>{
        vm.stations = response.data.BusDynInfo.BusInfo.Stop;
        vm.selectStation = station;
        vm.getLastTime();
      })
    },
    repeatRefresh(){
      setInterval(()=>{
        this.refresh();
      },1000*30);
    }
  },
  computed:{
    filterItem(){
      if(this.bustype == 'all'){
        return this.items;
      }else{
        let temp = [];
        this.items.forEach((item,index)=>{
          if(item.nameZh.includes(this.bustype)){
            temp.push(item);
          }
        })
        return temp;
      }
    },
  }
}
</script>