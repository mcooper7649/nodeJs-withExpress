// Declarations

const express = require('express')
const app = express()
const port = 3000

//Routes

app.get('/', (req, res) => {
    res.send("<h1>Hello, Everybody</h1>");
  })
app.get('/contact', (req, res) => {
    res.send("<h1>Contact me, at test@gmail.com</h1>");
  })
app.get('/about', (req, res) => {
    res.send(
        "<h2>The author of this page, Mike Cooper, Enjoys Coding and Video Games.</h2>"
    )
})


//Listenening Ports

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})