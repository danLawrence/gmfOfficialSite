<template>
    <div id="app-nav-head">
      <router-link to="/compA">go to compA</router-link><router-link to="/compB">go to compB</router-link><router-link to="/compC">go to compC</router-link><router-link to="/Hello">go to Hello</router-link>
    </div>
</template>

<script>
export default {
  name: 'app-nav-head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App app nav head'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

#app-nav-head {
  text-align: left;
  padding-left: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border: solid #42b983 1px;
  padding: 5px;
}
</style>
