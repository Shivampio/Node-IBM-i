const express = require('express');
const databaseRouter = require('./database/database');

const app = express()
const port = 3000

app.use(express.json())
app.use(databaseRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})