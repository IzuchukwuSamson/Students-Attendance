const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const attendanceRouter = require('./routes/attendanceRoute')
const studentsRouter = require('./routes/studentsRoute')
const userRouter = require('./routes/userRoute')

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    // console.log(req.headers)
    next()
})

app.use('/api/v1/attendance', attendanceRouter)
app.use('/api/v1/students', studentsRouter)
app.use('/api/v1/users', userRouter)


module.exports = app