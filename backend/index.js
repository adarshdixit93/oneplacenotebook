const connectToMongo = require('./util/db');
const express = require('express')
// DB Connect Function
connectToMongo();
// Express JS Server
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})