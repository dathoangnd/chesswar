<template>
    <div class="chessboard-wrapper">
        <div class="chessboard">
            <chessboard @onMove="youMove" :fen="fen" />
        </div>
        <div class="chess-history">
            <h3>{{player2}}</h3>
            <h3>{{player1}}</h3>
        </div>
    </div>
</template>

<script>
    import {chessboard} from 'vue-chessboard'
    import 'vue-chessboard/dist/vue-chessboard.css'
    import Chess from 'chess.js'
    export default {
        components: {
            chessboard
        },
        props: {
            player1: String,
            player1Move: String,
            player2: String,
            player2Move: String,
            debug: Boolean
        },
        created() {
            this.fen = this.chess.fen()
            if (this.player1Move.trim() != 0) {
                try {
                    eval('window.move1 = ' + this.player1Move)
                } catch (e) {
                }
            }

            if (this.player2Move.trim() != 0) {
                try {
                    eval('window.move2 = ' + this.player2Move)
                } catch (e) {
                }
            }
            var that = this
            window.gameInterval = setInterval(function() {
                if (!that.debug || !that.player1Turn) {
                    if (that.player1Turn) {
                        if (window.move1 != undefined) {
                            let newMove = window.move1(that.getCurrentBoard('w'))
                            let fenBk = that.chess.fen()
                            that.chess.move({
                                from: newMove.start,
                                to: newMove.stop
                            })
                            if (that.chess.fen() == fenBk) {
                                // Random move
                                let moves = that.chess.moves();
                                let move = moves[Math.floor(Math.random() * moves.length)];
                                that.chess.move(move);
                            }
                            that.fen = that.chess.fen()
                        } else{
                            alert("Đã xảy ra lỗi.")
                        }
                        if (!that.debug)
                            that.player1Turn = false
                    } else {
                        if (window.move2 != undefined) {
                            let newMove = window.move2(that.getCurrentBoard('b'))
                            let fenBk = that.chess.fen()
                            that.chess.move({
                                from: newMove.start,
                                to: newMove.stop
                            })
                            if (that.chess.fen() == fenBk) {
                                // Random move
                                let moves = that.chess.moves();
                                let move = moves[Math.floor(Math.random() * moves.length)];
                                that.chess.move(move);
                            }
                            that.fen = that.chess.fen()
                        } else{
                            alert("Đã xảy ra lỗi.")
                        }
                        
                        that.player1Turn = true
                    }
                }
            }, 2000)
        },
        data() {
            return {
                chess: new Chess(),
                player1Turn: true,
                removeFirst: false,
                fen: ''
            }
        },
        methods: {
            youMove(data) {
                if (this.debug && data.turn == 'black' && this.removeFirst) {
                    this.chess.load(data.fen)
                    this.player1Turn = false
                } else {
                    this.removeFirst = true;
                }
            },
            getCurrentBoard(color) {
                let board = []
                let loop = 'abcdefgh'
                for (let i = 0; i < loop.length; i++)
                    for (let j = 1; j <= 8; j++)
                        if (this.chess.get(`${loop[i]}${j}`) != null) {
                            board.push({
                                piece: (color == this.chess.get(`${loop[i]}${j}`).color ? this.chess.get(`${loop[i]}${j}`).type.toUpperCase() : this.chess.get(`${loop[i]}${j}`).type),
                                position: `${loop[i]}${j}`
                            })
                        }
                return board
            }
        }
    }
</script>

<style lang="scss">
    .chessboard-wrapper {
        display: flex;
        margin-top: 36px;
        .chessboard {
            flex-basis: 50%;
            .cg-board-wrap {
                margin-left: auto;
                margin-right: 80px;
            }
        }
        .chess-history {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
</style>