const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const db = require('./db')

let app = express()
app.use(parser.text())
app.use(cors())

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

app.listen(3001, function() {
    console.log("Listening at port 3001")
})