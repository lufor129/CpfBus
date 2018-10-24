<template>
   <v-stepper non-linear v-model="step"  vertical>
     <template v-for="(item,index) in data"> 
      <v-stepper-step color="green lighten-1" :key="index" :complete="step ==index+1" edit-icon="fas fa-bus-alt" editable :step="index+1">
        {{item.StopName}} 
        <small v-if="item.comeTime!=''">{{item.comeTime}}</small>
        <small v-else>班車尚未開出</small>
      </v-stepper-step>

      <v-stepper-content :step="index+1" :key="index.id">
        <v-card dark color="teal darken-1">
          <v-card-title primary-title>
            <div class="headline">{{item.StopName}}</div>
          </v-card-title>
          <v-card-text>
            <template v-if="Object.keys(item.ests[0]).length!=0  && item.comeTime!=''">              
              <div>車牌 : {{item.carId}}</div> 
                <div>下一班 : {{item.ests[0].est[0].est}} 分鐘後</div>
            </template>
            <template v-else-if="item.comeTime!=''">
              <div>車牌 : {{item.comeCarid}}</div>
              <div>下一班 : {{item.comeTime}} </div>
            </template>
            <template v-else>
              <div>目前沒車開過來QQ</div>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" @click="refresh">重新整理</v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

     </template>
  </v-stepper>
</template>

<script>
  
export default{
  name:"route",
  data(){
    return{
      routeId:"100",
      step:0,
      data:[
        {
         EXTVoiceNo:"01607",
        GoBack:"1",
        IVRNO:"1607",
        SID:"837",
        StopID:"1607",
        StopName:"鐵路機廠",
        Value:"null",
        carId:"",
        comeCarid:"428-FP",
        comeTime:"14:37",
        ests:[
          {
            est:[
              {
                carid:"422-FP",
                countdowntime:"30",
                est:"3",
                islast:"0",
              }
            ]
          }
        ],
        schId:"U_227182358_1",
        seqNo:"7",
        }
      ],
    }
  },
  methods:{
    getData(){
      const vm = this;
      this.$http.get(`${process.env.VUE_APP_API}/route?id=${this.routeId}`).then((response)=>{
        let temp = response.data.BusDynInfo[0].BusInfo[0].Route[0].EstimateTime;
        vm.data = temp;
      })
    },
    refresh(){
      setInterval(()=>{
        this.getData();
      },20*1000);
    }
  },
  created(){
    this.routeId = this.$store.state.RouteID;
    this.getData();
    this.refresh()
  }
}
</script>