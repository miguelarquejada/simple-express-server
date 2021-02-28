const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const userRoute = require('./routes/userRoute')

userRoute(app)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log('Server is running on port 3000'))