<template>
  <GmapMap
    :center="center"
    :zoom="14"
    :options="options"
    style="height: 100%"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="toggleInfoWindow(m)"
    />
    <GmapInfoWindow :position="infoWindowPos" :options="infoOptions" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <v-card>
        <v-card-title>
          <h1 class="title">{{infoContent.name}}</h1>
        </v-card-title>
        <v-card-text>
          <h3 v-if="infoContent.info == '1'">去程</h3>
          <h3 v-else>回程</h3>
        </v-card-text>
        <v-card-text v-if="infoContent.time!=undefined">
          <h2>{{infoContent.time}}</h2>
        </v-card-text>
      </v-card>
    </GmapInfoWindow>
    <GmapPolyline color="red" :path="path">
    </GmapPolyline>
    <GmapMarker
      :key="index.id"
      v-for="(m, index) in busMarkers"
      :position="m.position"
      :clickable="true"
      @click="toggleInfoWindow(m)"
      :icon="m.icon"
    />
  </GmapMap>
</template>

<script>

export default{
  name:"Map",
  data(){
    return{
      options:{"mapTypeControl":false,"streetViewControl":false,zoomControl:false},
      station:[],
      routeId:100,
      markers:[],
      center:{lat:10,lng:10},
      infoWinOpen:false,
      infoContent: {},
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      path: [],
      bus:[],
      busMarkers:[],
      NowPosition:{},
      stationTime:[]
    }
  },
  created(){
    const vm = this;
    this.routeId = this.$store.state.RouteID;
    this.getNowPosition();
    this.$http.get(`${process.env.VUE_APP_API}/station?id=${this.routeId}`).then((response)=>{
      vm.getBus();
      vm.refresh();
      let temp = response.data.BusDynInfo.BusInfo.Stop;
      vm.station = temp;
      vm.center = {lat:Number(vm.station[2].latitude), lng:Number(vm.station[2].longitude)};
      this.$http.get(`${process.env.VUE_APP_API}/route?id=${this.routeId}`).then((response)=>{
        let temp = response.data.BusDynInfo[0].BusInfo[0].Route[0].EstimateTime;
        vm.stationTime = temp;
        vm.station.forEach((item,index)=>{
          let time ="";
          if(Object.keys(vm.stationTime[index].ests[0]).length!=0  && vm.stationTime[index].comeTime!=''){
            time = `下一班 : ${vm.stationTime[index].ests[0].est[0].est} 分鐘後`
          }else if(vm.stationTime[index].comeTime!=''){
            time = `下一班 : ${vm.stationTime[index].comeTime}`;
          }else{
            time = "末班車已發QQ";
          }
          vm.markers.push({
            position: {
              lat: Number(item.latitude),
              lng: Number(item.longitude)
            },
            name:item.nameZh,
            SID:item.SID,
            goBack:item.GoBack,
            time:time
          })
          vm.path.push({
            lat: Number(item.latitude),
            lng: Number(item.longitude)
          })
        })
      })
    })
  },
  methods:{
    toggleInfoWindow: function(marker) {
      this.infoWindowPos = marker.position;
      if(marker.rectime!=undefined){
        this.infoContent= {name:`車號 : ${marker.name}`,info:marker.goBack,lat:marker.position.lat,lng:marker.position.lng};
      }else{
        this.infoContent = {name:`${marker.name}站`,info:marker.goBack,lat:marker.position.lat,lng:marker.position.lng,time:marker.time};
      }
      this.infoWinOpen = true;
    },
    getBus:function(){
      const vm = this;
      this.$http.get(`${process.env.VUE_APP_API}/busData?id=${this.routeId}`).then((response)=>{
        let temp = response.data.BusDynInfo[0].BusInfo[0].BusData;
        vm.busMarkers = [];
        vm.bus = temp;
        vm.bus.forEach((item,index)=>{
          vm.busMarkers.push({
            position: {
              lat: Number(item.Latitude),
              lng: Number(item.Longitude)
            },
            name:item.BusID,
            icon:"https://png.icons8.com/color/50/000000/trolleybus.png",
            goBack:item.GoBack
          })
        })
      })
    },
    getNowPosition(){
      navigator.geolocation.getCurrentPosition(position => {
        this.NowPosition = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
				};
			});
    },
    refresh(){
      setInterval(()=>{
        this.getBus();
      },10*1000)
    }
  }
}

</script>