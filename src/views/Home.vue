<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap align-center >
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline font-weight-regular green darken-2 white--text">公車車號</v-card-title>
          <v-card-text>
            <v-subheader class="pa-0">車種
              <v-btn color="red" @click="bustype='紅';select=''" fab dark small>紅</v-btn>
              <v-btn color="orange"  @click="bustype='橘';select=''" fab dark small>橘</v-btn>
              <v-btn color="warning"  @click="bustype='幹線';select=''" fab dark small>幹線</v-btn>
              <v-btn color="info"  @click="bustype='快線';select=''" fab dark small>快線</v-btn>
              <v-btn color="green"  @click="bustype='all';select=''" fab dark small>全</v-btn>
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
            ></v-select>
            <v-img v-if="selectBus!= {}"
              :src="selectBus.routeMapImageUrl"
            >
            </v-img>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-title class="headline font-weight-regular green darken-3  white--text" >選擇時間</v-card-title>
          <v-card-text>
            <v-time-picker v-model="time"  full-width color="green lighten-1"></v-time-picker>
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
    <v-layout row >
      <v-btn color="success">儲存</v-btn>
      <v-btn color="error" @click="clearAll">重設</v-btn>
    </v-layout>

  </v-container>
</template>

<script>

export default{
  name:"Home",
  data(){
    return{
      items:[1,2,3],
      select:"",
      time:null,
      selectBus:{},
      bustype:"all",
      stations:[],
      selectStation:""
    }
  },
  created(){
    const vm =this;
    this.$http.get("http://localhost:3000/bus").then((response)=>{
      let temp = response.data.BusDynInfo.BusInfo.Route;
      vm.items = temp;
    })
  },
  methods:{
    getObj(){
      this.items.forEach((item,index)=>{
        if(item.ID == this.select){
          this.selectBus = item;
        }
      })
      this.$http.get(`http://localhost:3000/station?id=${this.selectBus.ID}`).then((response)=>{
        let temp = response.data.BusDynInfo.BusInfo.Stop;
        this.stations = temp;
      })
    },
    clearAll(){
      this.bustype="all";
      this.selectBus={};
      this.time=null;
      this.select="";
      this.selectStation="";
      this.stations=[];
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
    }
  }
}
</script>