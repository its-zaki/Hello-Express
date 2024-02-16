const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World !</h1>')
})
app.get('/login', (req, res) => {
  res.send('Hello Login!')
})
app.get('/home', (req, res) => {
  res.send('Hello Home!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})