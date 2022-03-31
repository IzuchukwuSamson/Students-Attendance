const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
})

const Students = mongoose.model('student', studentSchema)

module.exports = Students









// const User = require('../models/userModel')

// exports.signup = async (req, res ,next) => {
//     const newUser = await User.create({
//         req.body.email,
//         req.body.email,
//         req.body.email,
//         req.body.email
//     })
// }



// {
//     index: 1,
//     id: 20171031743,
//     name: 'Izuchukwu',
//     dept: 'ABE',
//   },