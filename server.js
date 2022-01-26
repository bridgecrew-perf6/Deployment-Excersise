const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.listen(port, () => {
  console.log('Listening on port ' + port)
})