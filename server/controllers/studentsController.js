const Students = require('../models/studentsModel')

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Students.find()
        res.status(200).json({
            status: 'All Students Retrieved',
            data: {
                students
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: 'Failed to retrieve students',
            message: error
        }) 
    }
}

exports.createAStudent = async (req, res) => {
    try {
        const student = await Students.create(req.body)
        res.status(201).json({
            status: 'Student Created',
            data: {
                student
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: 'Failed to create student',
            message: error
        }) 
    }
}

exports.getAStudent = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.updateAStudent = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.deleteAStudent = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}
