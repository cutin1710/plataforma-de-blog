const express = require('express')
const routes = require('./routes/users')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)




app.listen(8800, () => {
    console.log('Listening on port 8800')
})