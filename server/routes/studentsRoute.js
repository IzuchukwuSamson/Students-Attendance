const express = require('express')
const studentsController = require('../controllers/studentsController')

studentsRouter = express.Router()


studentsRouter.route('/').get(studentsController.getAllStudents).post(studentsController.createAStudent)
studentsRouter.route('/:id').get(studentsController.getAStudent).patch(studentsController.updateAStudent).delete(studentsController.deleteAStudent)


module.exports = studentsRouter