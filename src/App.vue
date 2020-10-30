<template>
  <FileDownload/>
</template>

<script>
import FileDownload from './components/FileDownload.vue'

export default {
  name: 'App',
  components: {
    FileDownload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
