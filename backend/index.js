const express = require('express');
const DbConnect = require('./database')
const router = require('./router')
var bodyParser = require('body-parser')
require("dotenv").config()
const cors = require('cors')

const app = express()
DbConnect()

app.get('/', (req, res) => {
    // res.render('index.ejs');
    res.send("server running")
});

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000','http://localhost:3002']
}

app.use(cors(corsOption))
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(router)

app.listen(4000, () => {
    console.log('server started at 4000');
})
