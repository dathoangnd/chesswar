<template>
  <div class="about">
    <template v-if="$store.state.name == ''">
      <p style="margin-top: 150px;">Đăng nhập để tiếp tục</p>
      <input v-model.trim="key" placeholder="Mã bí mật">
      <button @click="login">Đăng nhập</button>
    </template>
    <template v-else-if="test">
      <ChessBoard player1="Bạn" :player2="$store.state.name" player1Move="" :player2Move="code" :debug="true" />
      <button @click="test = false">Trở về</button>
    </template>
    <template v-else>
      <p>Chào mừng {{$store.state.name}}</p>
      <span>Cài đặt thuật toán của nhóm tại đây</span>

      <PrismEditor v-model="code" language="js" :lineNumbers="true"></PrismEditor>

      <div class="action-btn">
        <button @click="save">Lưu</button>
        <button @click="doTest">Đấu thử</button>
        <button @click="logout">Đăng xuất</button>
      </div>
    </template>
  </div>
</template>

<script>
  import PrismEditor from 'vue-prism-editor'
  import request from '@/mixins/js/request.js'
  import auth from '@/mixins/js/auth.js'
  import ChessBoard from '@/components/ChessBoard'
  export default {
    mixins: [request, auth],
    components: {
      PrismEditor,
      ChessBoard
    },

    data() {
      return {
        key: '',
        test: false,
        code: "// Hàm move nhận đầu vào là thông tin bàn cờ, trả về nước đi tiếp theo\n\
// Ví dụ bàn cờ có vua trắng và vua đen, bên bạn là phe trắng\n\
// board = [\n//     {piece: \'k\',  position: \'d2\', color: \'w\'},\n\
//     {piece: \'k\',  position: \'e8\', color: \'b\'}\n\
// ]\n\
// color = 'w'\n\
function move(board, color) {\n    // Cài đặt thuật toán của bạn ở đây\n\n    return { // Di chuyển vua của bạn từ d2 tới d3\n        start: 'd2',\n        stop: 'd3'\n    }\n}"
      }
    },

    created() {
      if (this.$store.state.code.trim() != '') {
        this.code = this.$store.state.code
      }
    },

    methods: {
      login() {
        let that = this
        this.request('login', 'post', {
          secret: this.key
        })
          .then(function(res) {
            if (res.status == 200) {
              return res.json()
            } else {
              return Promise.reject('Incorrect login details')
            }
          })
          .then(res => {
            let payload = res
            if (res.code.trim() != '' && res.name != 'Người dùng thử') {
              that.code = res.code
            } else {
              that.code = "// Hàm move nhận đầu vào là thông tin bàn cờ, trả về nước đi tiếp theo\n\
// Ví dụ bàn cờ có vua trắng và vua đen, bên bạn là phe trắng\n\
// board = [\n//     {piece: \'k\',  position: \'d2\', color: \'w\'},\n\
//     {piece: \'k\',  position: \'e8\', color: \'b\'}\n\
// ]\n\
// color = 'w'\n\
function move(board, color) {\n    // Cài đặt thuật toán của bạn ở đây\n\n    return { // Di chuyển vua của bạn từ d2 tới d3\n        start: 'd2',\n        stop: 'd3'\n    }\n}"
            }
            delete payload.status
            delete payload.code
            that.setAuthCookie(payload)
            localStorage.code = that.code
            that.$store.commit('changeName', payload.name)
            that.$store.commit('changeSecret', payload.secret)
            that.$store.commit('changeCode', that.code)
          })
          .catch(function(e) {
            console.log(e)
            alert("Đăng nhập thất bại.")
          })
      },
      logout() {
        this.setAuthCookie({
          name: "",
          secret: ""
        })
        localStorage.code = ''
        this.$store.commit('changeName', '')
        this.$store.commit('changeSecret', '')
        this.$store.commit('changeCode', '')
      },
      save() {
        let that = this
        this.request('save', 'post', {
          code: this.code,
          secret: this.$store.state.secret
        })
          .then(function(res) {
            if (res.status == 200) {
              alert("Đã lưu.")
              localStorage.code = that.code
              that.$store.commit('changeCode', that.code)
            } else {
              return Promise.reject('Incorrect login details')
            }
          })
          .catch(function(e) {
            console.log(e)
            alert("Đã xảy ra lỗi. Vui lòng thử lại.")
          })
      },
      doTest() {
        try {
          eval('window.move2 = ' + this.code)
          this.test = true;
        } catch(e) {
          console.log(e)
          alert("Chương trình có lỗi cú pháp. Vui lòng kiểm tra lại.")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/mixins/sass/color.scss";
  p {
    margin-top: 50px;
    font-size: 16px;
    font-weight: bold;
    color: #E0E0E0;
  }

  span {
    color: #BDBDBD;
  }

  input {
    padding: 12px;
    margin: 10px;
    width: 360px;
  } 

  button {
    margin-top: 20px;
    display: inline-block;
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

  .action-btn {
    margin-top: 12px;
    text-align: center;
      button {
        &:nth-child(2) {
          background-color: $secondary;
          margin: 0 12px;
          &:hover {
            background-color: rgba($secondary, 0.8);
          }
        }
        &:nth-child(3) {
          background-color: $disable;
          &:hover {
            background-color: rgba($disable, 0.8);
          }
        }
      }
  }

</style>

<style lang="scss">
  .prism-editor-wrapper {
    width: 80%;
    margin: 20px auto;
    height: 320px;
  }
</style>
