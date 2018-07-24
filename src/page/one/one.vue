<template>
    <div>
        这是多页面应用1
        <index></index>
    </div>
</template>

<script>
import Index from './pages/index.vue'
export default {
  components: {
    index: Index
  }
}
</script>

<style scoped>

</style>
