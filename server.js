const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes/router')

app.use(express.static(path.join(__dirname, 'static')));

app.use('/calc', router);

app.listen(3232, () => {
    console.log("Server is running on https://localhost:3232");
})
