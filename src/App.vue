<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/login">Login</router-link>
      <button class="btn btn-secondary" @click="logout()">Logout</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {

      methods: {
          logout(){
              delete localStorage.token
              this.$router.replace(this.$route.query.redirect || '/login')
          },
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  #nav button{
    float: right;
    margin-right: 20px;
  }
</style>
