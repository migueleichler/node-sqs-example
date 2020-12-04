const express = require('express')
const app = express();


app.get('/', (req, res) => {
    console.log('Http GET request!')
    res.send('Hello World!')
})


module.exports = app
