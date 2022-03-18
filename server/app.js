const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const attendanceRouter = require('./routes/attendanceRoute')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())





// app.get('/api/v1/attendance', getAllStudentsAttendance)
// app.post('/api/v1/attendance', createStudentAttendance)

// app.get('/api/v1/attendance/:id', getEachStudentAttendance)
// app.patch('/api/v1/attendance/:id', updateStudentAttendance)
// app.delete('/api/v1/attendance/:id', deleteStudentAttendance)

app.use('/api/v1/attendance', attendanceRouter)

// attendanceRouter.route('/').get(getAllStudentsAttendance).post(createStudentAttendance)
// attendanceRouter.route('/:id').get(getEachStudentAttendance).patch(updateStudentAttendance).delete(deleteStudentAttendance)



const port = 8000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})