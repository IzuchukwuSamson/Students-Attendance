const fs = require('fs')

const attendance = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data.json`, 'utf-8'))

exports.getAllStudentsAttendance = (req, res) => {
    res.status(200).json({
        status: 'success',
        total : attendance.length,
        data: {
            attendance
        }
    })
}

exports.getEachStudentAttendance = (req, res) => {
    console.log(req.params)

    const id = req.params.id * 1
    const attendances = attendance.find(el => el.id === id)
    if (id > attendance.length) {
        res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        })
    }
    
    res.status(200).json({
        message: 'sucess',
        data: {
            attendances
        }
    })
}

exports.createStudentAttendance = (req, res) => {
    // console.log(req.body)
    const newId = attendance[attendance.length -1 ].id + 1
    const newAttendance = Object.assign({id: newId}, req.body)

    students.push(newStudent)
    fs.writeFile(`${__dirname}/dev-data/data.json`, JSON.stringify(students), err => {
        res.status(201).json({
            message: 'success',
            data: {
                attendance: newAttendance
            }
        })
    })
}

exports.updateStudentAttendance = (req, res) => {
    
    if (req.params.id * 1 > attendance.length) {
        res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        })
    }
    
    res.status(200).json({
        message: 'sucess',
        data: {
            attendance: 'Updated'
        }
    })
}

exports.deleteStudentAttendance = (req, res) => {
    
    if (req.params.id> attendance.length) {
        res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        })
    }
    
    res.status(204).json({
        message: 'sucess',
        data: {
            attendance: null
        }
    })
}
