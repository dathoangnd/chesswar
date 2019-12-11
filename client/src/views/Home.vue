<template>
  <div class="home">
    <template v-if="intro">
      <img alt="App logo" src="../assets/logo.png">
      <h1>Đấu trường danh vọng</h1>
      <h3>Thắng bại tại kỹ năng</h3>
      <button @click="battle">Vào trận</button>
    </template>
    <template v-else>
      <div class="team-selector">
        <h3>Chọn đội</h3>
        <div class="team-board">
          <div class="team-side">
            <img src="../assets/white-king.svg">
            <br />
            <select v-model="teamWhite">
              <option value="">Chọn đội Trắng</option>
              <option value="2">Nhóm 2</option>
              <option value="3">Nhóm 3</option>
              <option value="6">Nhóm 6</option>
              <option value="8">Nhóm 8</option>
              <option value="9">Nhóm 9</option>
              <option value="10">Nhóm 10</option>
              <option value="11">Nhóm 11</option>
              <option value="12">Nhóm 12</option>
            </select>
          </div>
          <div class="team-side">
            <img src="../assets/black-king.svg">
            <br />
            <select v-model="teamBlack">
              <option value="">Chọn đội Đen</option>
              <option value="2">Nhóm 2</option>
              <option value="3">Nhóm 3</option>
              <option value="6">Nhóm 6</option>
              <option value="8">Nhóm 8</option>
              <option value="9">Nhóm 9</option>
              <option value="10">Nhóm 10</option>
              <option value="11">Nhóm 11</option>
              <option value="12">Nhóm 12</option>
            </select>
          </div>
        </div>
        <a :href="`/#/match/${teamWhite}-${teamBlack}`" target="_blank"><button>Bắt đầu</button></a>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        intro: true,
        teamWhite: '',
        teamBlack: ''
      }
    },
    methods: {
      battle() {
        if (window.ChessIsInMyDNA) {
          this.intro = false
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
    h3 {
      color: #e0e0e0;
      font-weight: normal;
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
    .team-selector {
      margin-top: 50px;
      .team-board {
        display: flex;
        padding-top: 30px;
        width: 700px;
        margin: auto;
        .team-side {
          flex-basis: 50%;
          text-align: center;
          img {
            width: 150px;
          }
          select {
            margin: 20px 0 30px 0;
            padding: 6px 10px;
            border-radius: 5px;
            border-color: #757575;
            background-color: #BDBDBD;
            option {
              background: #BDBDBD30;
            }
          }
        }
      }
    }
  }
</style>
