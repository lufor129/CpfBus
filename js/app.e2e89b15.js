(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],h=0,p=[];h<r.length;h++)i=r[h],s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/CpfBus/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),s=o("ce5b"),a=o.n(s),i=(o("bf40"),o("aa47")),r=o.n(i);n["default"].use(a.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md",lang:{locales:{zhHant:r.a},current:"zhHant"}});var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-toolbar",{attrs:{app:"","clipped-left":t.clipped,color:"blue darken-1",dark:""}},[o("v-toolbar-title",[t._v(t._s(t.title))]),o("v-spacer")],1),o("v-content",[o("router-view")],1),o("v-bottom-nav",{attrs:{active:t.bottomNav,color:t.color,value:!0,shift:""},on:{"update:active":function(e){t.bottomNav=e}}},t._l(t.links,function(e,n,s){return o("v-btn",{key:s,attrs:{dark:"",disabled:t.clickable(s),to:e}},[o("span",[t._v(t._s(n))]),o("v-icon",[t._v(t._s(t.icons(s)))])],1)}))],1)},l=[],u=(o("c5f6"),o("28a5"),{name:"App",data:function(){return{clipped:!1,fixed:"true",title:"智慧水族箱",links:{"時間":"/","路徑":"/route","地圖":"/map"},bottomNav:0,RightHour:0,RightMin:0}},methods:{icons:function(t){switch(t){case 0:return"insert_invitation";case 1:return"fas fa-route";case 2:return"fas fa-map-marked-alt"}},clickable:function(t){return(""==this.RouteID||""==this.StationID)&&(1==t||2==t)},showTime:function(){var t=new Date;this.RightHour=t.getHours(),this.RightMin=t.getMinutes()},refresh:function(){var t=this;setInterval(function(){t.checkTime()},2e4)},checkTime:function(){if(""!=this.BusTime){this.showTime();var t=this.BusTime.split(":"),e=60*(Number(t[0])-this.RightHour)+(Number(t[1])-this.RightMin);switch(!0){case e<0:changeColor(0,0,0);break;case e<=1:changeColor(255,0,0);break;case e<=2:changeColor(255,255,0);break;case e<=6:changeColor(0,255,0);break;case e<=8:changeColor(0,0,255);break;case e<=10:changeColor(128,0,128);break;default:changeColor(255,255,255)}}}},computed:{color:function(){switch(this.bottomNav){case 0:return"blue-grey";case 1:return"teal";case 2:return"brown"}},RouteID:function(){return this.$store.state.RouteID},StationID:function(){return this.$store.state.StationID},BusTime:function(){return this.$store.state.BusTime}},created:function(){this.refresh()},watch:{BusTime:function(){this.checkTime()}}}),h=u,p=o("2877"),f=Object(p["a"])(h,c,l,!1,null,null,null);f.options.__file="App.vue";var m=f.exports,v=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","grid-list-lg":""}},[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),o("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[o("v-flex",{attrs:{xs12:""}},[o("v-card",[o("v-card-title",{staticClass:"headline font-weight-regular green darken-2 white--text"},[t._v("公車車號")]),o("v-card-text",[o("v-subheader",{staticClass:"pa-0"},[t._v("車種\n            "),o("v-btn",{attrs:{color:"red",fab:"",dark:"",small:""},on:{click:function(e){t.bustype="紅",t.select="",t.selectStation=""}}},[t._v("紅")]),o("v-btn",{attrs:{color:"orange",fab:"",dark:"",small:""},on:{click:function(e){t.bustype="橘",t.select="",t.selectStation=""}}},[t._v("橘")]),o("v-btn",{attrs:{color:"warning",fab:"",dark:"",small:""},on:{click:function(e){t.bustype="幹線",t.select="",t.selectStation=""}}},[t._v("幹線")]),o("v-btn",{attrs:{color:"info",fab:"",dark:"",small:""},on:{click:function(e){t.bustype="快線",t.select="",t.selectStation=""}}},[t._v("快線")]),o("v-btn",{attrs:{color:"green",fab:"",dark:"",small:""},on:{click:function(e){t.bustype="all",t.select="",t.selectStation=""}}},[t._v("全")])],1),o("v-autocomplete",{attrs:{items:t.filterItem,"item-text":"nameZh","item-value":"ID",required:"",label:"公車路線"},on:{change:t.getObj},scopedSlots:t._u([{key:"item",fn:function(e){return["object"!==typeof e.item?[o("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]:[o("v-list-tile-content",[o("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.nameZh)}}),o("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.item.ddesc)}})],1)]]}}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),""!=t.select?o("v-select",{attrs:{items:t.stations,label:"站名",required:"","item-text":"nameZh","item-value":"SID"},on:{change:t.getLastTime},model:{value:t.selectStation,callback:function(e){t.selectStation=e},expression:"selectStation"}}):t._e(),t.selectBus!={}?o("v-img",{attrs:{src:t.selectBus.routeMapImageUrl}}):t._e()],1)],1)],1),o("v-flex",{attrs:{xs12:""}},[""!=t.selectStation?o("v-card",[""!=t.comeBus.comeTime?o("v-card-title",{staticClass:"headline font-weight-regular green darken-3  white--text"},[t._v("下一班時間 : "+t._s(t.comeBus.comeTime))]):o("v-card-title",{staticClass:"headline font-weight-regular green darken-3  white--text"},[t._v("已經沒班次咯")])],1):t._e()],1)],1),o("v-layout",{attrs:{row:""}},[o("v-btn",{attrs:{color:"success"},on:{click:t.checkInput}},[t._v("儲存")]),o("v-btn",{attrs:{color:"error"},on:{click:t.clearAll}},[t._v("重設")])],1),0!=t.myFavorite.length?o("v-layout",[o("v-flex",[o("v-select",{attrs:{items:t.myFavorite,"item-text":"Name","menu-props":"auto","item-value":"Route",label:"Select","prepend-icon":"fas fa-heart",color:"red"},on:{change:t.chooseFavorite},model:{value:t.favorite,callback:function(e){t.favorite=e},expression:"favorite"}})],1)],1):t._e(),o("v-snackbar",{attrs:{color:"warning",timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),o("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},g=[],b=(o("6762"),o("2fdb"),o("ac6a"),o("9062")),k=o.n(b),I=(o("e40d"),{name:"Home",components:{Loading:k.a},data:function(){return{items:[1,2,3],time:null,selectBus:{},bustype:"all",stations:[],selectStation:"",snackbar:!1,text:"",comeBus:{},select:"",isLoading:!1,myFavorite:[],favorite:null}},created:function(){this.isLoading=!0;var t=this;this.$http.get("".concat("https://busserverapp.herokuapp.com","/bus")).then(function(e){var o=e.data.BusDynInfo.BusInfo.Route;t.items=o,t.isLoading=!1}),""!=this.$store.state.StationID&&this.$store.state.RouteID&&(this.refresh(),this.repeatRefresh());var e=JSON.parse(localStorage.getItem("myFavorite"));void 0==e?(this.myFavorite=[],localStorage.setItem("myFavorite",JSON.stringify([]))):this.myFavorite=e},methods:{getObj:function(t){var e=this;this.selectStation="",this.items.forEach(function(t,o){t.ID==e.select&&(e.selectBus=t)}),this.$http.get("".concat("https://busserverapp.herokuapp.com","/station?id=").concat(this.selectBus.ID)).then(function(t){var o=t.data.BusDynInfo.BusInfo.Stop;e.stations=o})},chooseFavorite:function(){this.bustype="all";var t=this;this.select=this.favorite.ID;var e=this.favorite.SID;this.$http.get("".concat("https://busserverapp.herokuapp.com","/station?id=").concat(t.select)).then(function(o){t.stations=o.data.BusDynInfo.BusInfo.Stop,t.selectStation=e,t.getLastTime()})},clearAll:function(){this.bustype="all",this.selectBus={},this.time=null,this.select="",this.selectStation="",this.stations=[],this.$store.dispatch("storeRoute",this.select),this.$store.dispatch("storeStation",this.selectStation),changeColor(255,255,255)},checkInput:function(){var t=this;if(this.text="",""==this.select||""==this.selectStation)this.text=" 資料不完整";else if(""==this.comeBus.comeTime)this.text="已經沒公車了喔";else{this.$store.dispatch("storeRoute",this.select),this.$store.dispatch("storeStation",this.selectStation),this.$store.dispatch("setBusTime",this.comeBus.comeTime);var e=JSON.parse(localStorage.getItem("myFavorite")),o={Route:{ID:this.select,SID:this.selectStation},Name:"".concat(this.selectBus.nameZh," -- ").concat(this.comeBus.StopName)},n=!1;e.forEach(function(e){e.Route.ID==t.select&&e.Route.SID==t.selectStation&&(n=!0)}),0==n&&(e.push(o),localStorage.setItem("myFavorite",JSON.stringify(e)),this.myFavorite=JSON.parse(localStorage.getItem("myFavorite"))),this.text="資料已儲存",this.repeatRefresh()}this.snackbar=!0},getLastTime:function(){var t=this;this.$http.get("".concat("https://busserverapp.herokuapp.com","/getLastTime?RID=").concat(t.select,"&BID=").concat(t.selectStation)).then(function(e){t.comeBus=e.data})},refresh:function(){var t=this,e=this.$store.state.RouteID;this.select=e;var o=this.$store.state.StationID;this.$http.get("".concat("https://busserverapp.herokuapp.com","/station?id=").concat(e)).then(function(e){t.stations=e.data.BusDynInfo.BusInfo.Stop,t.selectStation=o,t.getLastTime()})},repeatRefresh:function(){var t=this;setInterval(function(){t.refresh()},3e4)}},computed:{filterItem:function(){var t=this;if("all"==this.bustype)return this.items;var e=[];return this.items.forEach(function(o,n){o.nameZh.includes(t.bustype)&&e.push(o)}),e}}}),_=I,S=Object(p["a"])(_,d,g,!1,null,null,null);S.options.__file="Home.vue";var y=S.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("GmapMap",{staticStyle:{height:"100%"},attrs:{center:t.center,zoom:14,options:t.options}},[t._l(t.markers,function(e,n){return o("GmapMarker",{key:n,attrs:{position:e.position,clickable:!0},on:{click:function(o){t.toggleInfoWindow(e)}}})}),o("GmapInfoWindow",{attrs:{position:t.infoWindowPos,options:t.infoOptions,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[o("v-card",[o("v-card-title",[o("h1",{staticClass:"title"},[t._v(t._s(t.infoContent.name))])]),o("v-card-text",["1"==t.infoContent.info?o("h3",[t._v("去程")]):o("h3",[t._v("回程")])]),void 0!=t.infoContent.time?o("v-card-text",[o("h2",[t._v(t._s(t.infoContent.time))])]):t._e()],1)],1),o("GmapPolyline",{attrs:{color:"red",path:t.path}}),t._l(t.busMarkers,function(e,n){return o("GmapMarker",{key:n.id,attrs:{position:e.position,clickable:!0,icon:e.icon},on:{click:function(o){t.toggleInfoWindow(e)}}})})],2)},T=[],w=(o("7f7f"),o("456d"),{name:"Map",data:function(){return{options:{mapTypeControl:!1,streetViewControl:!1,zoomControl:!1},station:[],routeId:100,markers:[],center:{lat:10,lng:10},infoWinOpen:!1,infoContent:{},infoWindowPos:null,infoOptions:{pixelOffset:{width:0,height:-35}},path:[],bus:[],busMarkers:[],NowPosition:{},stationTime:[]}},created:function(){var t=this,e=this;this.routeId=this.$store.state.RouteID,this.getNowPosition(),this.$http.get("".concat("https://busserverapp.herokuapp.com","/station?id=").concat(this.routeId)).then(function(o){e.getBus(),e.refresh();var n=o.data.BusDynInfo.BusInfo.Stop;e.station=n,e.center={lat:Number(e.station[2].latitude),lng:Number(e.station[2].longitude)},t.$http.get("".concat("https://busserverapp.herokuapp.com","/route?id=").concat(t.routeId)).then(function(t){var o=t.data.BusDynInfo[0].BusInfo[0].Route[0].EstimateTime;e.stationTime=o,e.station.forEach(function(t,o){var n="";n=0!=Object.keys(e.stationTime[o].ests[0]).length&&""!=e.stationTime[o].comeTime?"下一班 : ".concat(e.stationTime[o].ests[0].est[0].est," 分鐘後"):""!=e.stationTime[o].comeTime?"下一班 : ".concat(e.stationTime[o].comeTime):"末班車已發QQ",e.markers.push({position:{lat:Number(t.latitude),lng:Number(t.longitude)},name:t.nameZh,SID:t.SID,goBack:t.GoBack,time:n}),e.path.push({lat:Number(t.latitude),lng:Number(t.longitude)})})})})},methods:{toggleInfoWindow:function(t){this.infoWindowPos=t.position,void 0!=t.rectime?this.infoContent={name:"車號 : ".concat(t.name),info:t.goBack,lat:t.position.lat,lng:t.position.lng}:this.infoContent={name:"".concat(t.name,"站"),info:t.goBack,lat:t.position.lat,lng:t.position.lng,time:t.time},this.infoWinOpen=!0},getBus:function(){var t=this;this.$http.get("".concat("https://busserverapp.herokuapp.com","/busData?id=").concat(this.routeId)).then(function(e){var o=e.data.BusDynInfo[0].BusInfo[0].BusData;t.busMarkers=[],t.bus=o,t.bus.forEach(function(e,o){t.busMarkers.push({position:{lat:Number(e.Latitude),lng:Number(e.Longitude)},name:e.BusID,icon:"https://png.icons8.com/color/50/000000/trolleybus.png",goBack:e.GoBack})})})},getNowPosition:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.NowPosition={lat:parseFloat(e.coords.latitude),lng:parseFloat(e.coords.longitude)}})},refresh:function(){var t=this;setInterval(function(){t.getBus()},1e4)}}}),D=w,x=Object(p["a"])(D,B,T,!1,null,null,null);x.options.__file="map.vue";var N=x.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-stepper",{attrs:{"non-linear":"",vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[t._l(t.data,function(e,n){return[o("v-stepper-step",{key:n,attrs:{color:"green lighten-1",complete:t.step==n+1,"edit-icon":"fas fa-bus-alt",editable:"",step:n+1}},[t._v("\n      "+t._s(e.StopName)+" \n      "),""!=e.comeTime?o("small",[t._v(t._s(e.comeTime))]):o("small",[t._v("班車尚未開出")])]),o("v-stepper-content",{key:n.id,attrs:{step:n+1}},[o("v-card",{attrs:{dark:"",color:"teal darken-1"}},[o("v-card-title",{attrs:{"primary-title":""}},[o("div",{staticClass:"headline"},[t._v(t._s(e.StopName))])]),o("v-card-text",[0!=Object.keys(e.ests[0]).length&&""!=e.comeTime?[o("div",[t._v("車牌 : "+t._s(e.carId))]),o("div",[t._v("下一班 : "+t._s(e.ests[0].est[0].est)+" 分鐘後")])]:""!=e.comeTime?[o("div",[t._v("車牌 : "+t._s(e.comeCarid))]),o("div",[t._v("下一班 : "+t._s(e.comeTime)+" ")])]:[o("div",[t._v("末班車已發QQ")])]],2),o("v-card-actions",[o("v-btn",{attrs:{color:"info"},on:{click:t.refresh}},[t._v("重新整理")])],1)],1)],1)]})],2)},C=[],R={name:"route",data:function(){return{routeId:"100",step:0,data:[{EXTVoiceNo:"01607",GoBack:"1",IVRNO:"1607",SID:"837",StopID:"1607",StopName:"鐵路機廠",Value:"null",carId:"",comeCarid:"428-FP",comeTime:"14:37",ests:[{est:[{carid:"422-FP",countdowntime:"30",est:"3",islast:"0"}]}],schId:"U_227182358_1",seqNo:"7"}]}},methods:{getData:function(){var t=this;this.$http.get("".concat("https://busserverapp.herokuapp.com","/route?id=").concat(this.routeId)).then(function(e){var o=e.data.BusDynInfo[0].BusInfo[0].Route[0].EstimateTime;t.data=o})},refresh:function(){var t=this;setInterval(function(){t.getData()},2e4)}},created:function(){this.routeId=this.$store.state.RouteID,this.getData(),this.refresh()}},$=R,F=Object(p["a"])($,O,C,!1,null,null,null);F.options.__file="route.vue";var M=F.exports;n["default"].use(v["a"]);var P=new v["a"]({routes:[{path:"/",name:"home",component:y},{path:"/map",name:"map",component:N},{path:"/route",name:"route",component:M}]}),j=o("2f62"),E=o("bc3a"),L=o.n(E);n["default"].use(j["a"]);var W=new j["a"].Store({state:{RouteID:"",StationID:"",BusTime:""},mutations:{ROUTE:function(t,e){t.RouteID=e},STATION:function(t,e){t.StationID=e},BUSTIME:function(t,e){t.BusTime=e}},actions:{storeRoute:function(t,e){t.commit("ROUTE",e)},storeStation:function(t,e){t.commit("STATION",e)},setBusTime:function(t,e){t.commit("BUSTIME",e)}}}),G=o("a7fe"),H=o.n(G),A=(o("d5e8"),o("d1e7"),o("755e"));n["default"].config.productionTip=!1,n["default"].use(H.a,L.a),n["default"].use(A,{load:{key:"AIzaSyAmVjM34E5Jwh4EC9N4LbLvGUvK8LlsPGY",libraries:"places"}}),new n["default"]({router:P,store:W,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.e2e89b15.js.map