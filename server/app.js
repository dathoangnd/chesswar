const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const db = require('./db')

let app = express()
app.use(parser.text())
app.use(cors())
app.use(express.static('public'))

app.post('/login', function(req, res) {
    let payload = {}
    try {
        payload = JSON.parse(req.body)
    } catch(e) {}

    if (payload.secret != undefined && payload.secret != '') {
        db('users').where({'secret': payload.secret}).then(function(rows) {
            if (rows.length > 0) {
                res.status(200).json({
                    status: "Success",
                    name: rows[0].name,
                    secret: payload.secret,
                    code: rows[0].move
                })
            } else {
                res.status(400).json({
                    status: "Incorect key"
                })
            }
        }).catch(function(e){
            res.status(500).json({
                status: "Server error"
            })
        })
    } else {
        res.status(400).json({
            status: "Incorect key"
        })
    }
})

app.post('/save', function(req, res) {
    let payload = {}
    try {
        payload = JSON.parse(req.body)
    } catch(e) {}

    if (payload.secret != undefined && payload.secret != '') {
        db('users').where({'secret': payload.secret}).then(function(rows) {
            if (rows.length > 0) {
                db('users').where({'secret': payload.secret}).update({ move: payload.code })
                    .then(function() {
                        res.status(200)
                        res.end()
                    })
                    .catch(function(e) {
                        res.status(500).json({
                            status: "Server error"
                        })
                    })
            } else {
                res.status(400).json({
                    status: "Incorect key"
                })
            }
        }).catch(function(e){
            res.status(500).json({
                status: "Server error"
            })
        })
    } else {
        res.status(400).json({
            status: "Incorect key"
        })
    }
})

app.post('/code', async function(req, res) {
    let payload = {}
    try {
        payload = JSON.parse(req.body)
    } catch(e) {}

    if (payload.teams != undefined && payload.teams != '') {
        let team1 = payload.teams.split('-')[0]
        let team2 = payload.teams.split('-')[1]
        let code1 = ''
        let code2 = ''
        db('users').then(function(rows) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].name == `Nhóm ${team1}`) {
                    code1 = rows[i].move
                }
                if (rows[i].name == `Nhóm ${team2}`) {
                    code2 = rows[i].move
                }
            }
            
            res.status(200).json({
                status: "Success",
                code1,
                code2
            })
        }).catch(function(e){
            res.status(500).json({
                status: "Server error"
            })
        })
    } else {
        res.status(400).json({
            status: "Incorect teams"
        })
    }
})

app.listen(process.env.PORT || 3001, function() {
    console.log("Listening at port 3001")
})