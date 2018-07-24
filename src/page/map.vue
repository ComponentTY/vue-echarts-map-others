<template>
  <div>
    <el-amap vid="amapDemo" :zoom="zoom" :amap-manager="amapManager" :center="center" class="amap-demo" :resizeEnable='true' :rotateEnable='true' :keyboardEnable='true' :mapStyle='mapStyle'>
      <el-amap-marker v-for="(marker, index) in markers" :key='index' :position='markers[index]'></el-amap-marker>
    </el-amap>
    <div>
      <el-button @click="add">add Marker</el-button>
    </div>
  </div>
</template>

<script>
  import { AMapManager } from 'vue-amap'
  // 应用高德地图的原生sdk :amap-manager="amapManager"
  let amapManager = new AMapManager()
  export default {
    data () {
      return {
        location: {},
        zoom: 11,
        center: [121.59996, 31.197646],
        markers: [],
        amapManager,
        mapStyle: 'dark'
      }
    },
    created () {
      this.location = {"locations":[{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.739269","lat":"31.264564"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"34.139978"},{"lon":"120.224215","lat":"30.197081"},{"lon":"120.224215","lat":"30.209184"},{"lon":"120.224215","lat":"30.209184"}]}
      let position = []
      this.location.locations.map(item => {
        position = [item.lon, item.lat]
        this.markers.push(position)
      })
    },
    methods: {
      add () {
        let o = this.amapManager.getMap()
        console.log(o)
        let marker = new AMap.Marker({
          position: [121.5996, 31.177646]
        })
        marker.setMap(o)
      }
    }
  }
</script>

<style scoped>
.amap-demo {
  height: 500px;
}
</style>