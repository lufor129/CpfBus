<template>
  <GmapMap
    :center="{lat:23.5, lng:121}"
    :zoom="10"
    :options="options"
    style="height: 100%"
  >
  </GmapMap>
</template>

<script>

export default{
  name:"Map",
  data(){
    return{
      options:{"mapTypeControl":false,"streetViewControl":false,zoomControl:false}
    }
  }
}
</script>