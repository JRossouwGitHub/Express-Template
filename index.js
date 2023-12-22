const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/endpoints', routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})