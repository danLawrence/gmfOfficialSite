<template>
  <div id="app">
    <compC></compC>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import compC from './components/comp-c'
export default {
  name: 'app',
  components: {
    compC
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
  margin: 0;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
