const express = require('express')
const attendanceContoller = require('./../controllers/attendanceController')


const attendanceRouter = express.Router()

attendanceRouter.route('/').get(attendanceContoller.getAllStudentsAttendance).post(attendanceContoller.createStudentAttendance)
attendanceRouter.route('/:id').get(attendanceContoller.getEachStudentAttendance).patch(attendanceContoller.updateStudentAttendance).delete(attendanceContoller.deleteStudentAttendance)

module.exports = attendanceRouter