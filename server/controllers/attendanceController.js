// const fs = require('fs')
const Attendance = require('./../models/attendanceModel')

// const attendance = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data.json`, 'utf-8'))

exports.getAllStudentsAttendance = async (req, res) => {

    try {
        const attendance = await Attendance.find()
        res.status(200).json({
            status: 'success',
            total : attendance.length,
            data: {
                attendance
            }
        })    
    } 
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: error
        })
    }
}

exports.getEachStudentAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id)
        // console.log(req.params)
       
       res.status(200).json({
           message: 'sucess',
           data: {
              attendance
          }
      })    
    } 
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: error
        })
    }
}

exports.createStudentAttendance =  async(req, res) => {
   try{
          // console.log(req.body)
        const newAttendance = await Attendance.create(req.body)
    
       res.status(201).json({
         status: 'success',
          data: {
             attendance: newAttendance
          }
       })
   }
   catch(error){
       res.status(400).json({
           status: 'Fail',
           message: error
       })
   }
    
}

exports.updateStudentAttendance = async (req, res) => {
    try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })        

    res.status(200).json({
        message: 'success',
        data: {
            attendance
        }
    })
    } 
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: error
        })
    }
}

exports.deleteStudentAttendance = async (req, res) => {
    
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id)        
        res.status(204).json({
            message: 'sucess',
            data: null
        })
        } 
        catch(error){
            res.status(400).json({
                status: 'Fail',
                message: error
            })
        }
}
