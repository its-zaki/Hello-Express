const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World !</h1>')
})



app.listen(process.env.PORTS, () => {
  console.log(`Example app listening on port ${process.env.PORTS}`)
})