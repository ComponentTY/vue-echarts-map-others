<template>
  <div>
    <el-card>vue-amap vue中的高德地图</el-card>
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
  import image from '@/assets/images/ic_locationmarker.png'
  // 应用高德地图的原生sdk :amap-manager="amapManager"
  let amapManager = new AMapManager()
  export default {
    data () {
      return {
        location: {},
        zoom: 11,
        center: [121.59996, 31.197646],
        markers: [],
        map: null,
        amapManager,
        mapStyle: 'dark'
      }
    },
    created () {
      this.$store.commit('setActiveMenu', '/map')
    },
    methods: {
      add () {
        // console.log(o)
        this.map = this.amapManager.getMap()
        console.log(this.map)
        let marker = new AMap.Marker({
          icon: new AMap.Icon({
            size: new AMap.Size(36, 44),
            image: image
          }),
          position: [Math.random() * 120, Math.random() * 90]
        })
        marker.setMap(this.map)
        this.map.setFitView()
      }
    }
  }
</script>

<style scoped>
.amap-demo {
  height: 500px;
}
</style>