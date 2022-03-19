const mongoose = require('mongoose')


const attendanceSchema = new mongoose.Schema({
    regNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
})


const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance
