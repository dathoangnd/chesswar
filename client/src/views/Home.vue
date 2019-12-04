<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <h3>Chào mừng tới</h3>
    <h1>Đấu trường danh vọng</h1>
    <button @click="battle">Vào trận</button>
  </div>
</template>

<script>
  export default {
    name: 'home',

    methods: {
      battle() {
        if (window.chesswar) {
          alert("Battle")
        } else {
          alert("Đấu trường chưa mở. Hãy ghi danh và quay lại sau.")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/mixins/sass/color.scss";
  .home {
    img {
      width: 240px;
    }
    h1 {
      color: $primary;
      margin-top: 0;
    }
    button {
      margin-top: 12px;
      padding: 12px 16px;
      border-radius: 5px;
      border: none;
      color: #fff;
      background-color: $primary;
      cursor: pointer;
      &:hover {
        background-color: rgba($primary, 0.8);
      }
    }
  }
</style>
