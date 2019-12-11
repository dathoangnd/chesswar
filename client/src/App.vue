<template>
<div>
  <div id="app">
    <div id="nav">
      <router-link to="/">Thi đấu</router-link> |
      <router-link to="/about">Ghi danh</router-link>
    </div>
    <router-view/>
  </div>
  <vue-particles v-if="!$store.state.battle"
    color="#ffd600"
    :particleOpacity="0.7"
    :particlesNumber="80"
    shapeType="circle"
    :particleSize="4"
    linesColor="#9E9E9E"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="repulse"
  >
  </vue-particles>
</div>
</template>

<script>
  import auth from '@/mixins/js/auth.js'
  export default {
    mixins: [auth],
    created() {
      let payload = this.getAuthCookie();
      this.$store.commit('changeName', payload.name);
      this.$store.commit('changeSecret', payload.secret);
      if (localStorage.code != undefined) {
        this.$store.commit('changeCode', localStorage.code);
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#nav {
  padding: 30px;
  color: #e0e0e0;
  a {
    color: #e0e0e0;
    font-weight: bold;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style lang="scss">
  #particles-js {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>