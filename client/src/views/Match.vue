<template>
  <div class="about" v-if="fetched">
    <ChessBoard :player1="`Nhóm ${team1}`" :player2="`Nhóm ${team2}`" :player1Move="code1" :player2Move="code2" :debug="false" />
  </div>
</template>

<script>
  import request from '@/mixins/js/request.js'
  import ChessBoard from '@/components/ChessBoard'
  export default {
    mixins: [request],
    components: {
      ChessBoard
    },

    data() {
      return {
        code1: '',
        code2: '',
        team1: '',
        team2: '',
        fetched: false
      }
    },

    created() {
        this.$store.commit('changeBattle', true)
        let teams = this.$route.params.teams;
       this.request('code', 'post', {
          teams: teams
        })
          .then(function(res) {
            if (res.status == 200) {
              return res.json()
            } else {
              return Promise.reject('Incorrect teams')
            }
          })
          .then(res => {
            this.code1 = res.code1
            this.code2 = res.code2
            this.team1 = teams.split('-')[0]
            this.team2 = teams.split('-')[1]
            this.fetched = true
          }).catch(err => {
            console.log(err)
              alert("Đã xảy ra lỗi.")
          })
    }
  }
</script>

<style lang="scss" scoped>
</style>