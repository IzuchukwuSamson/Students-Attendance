const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: 'success',
            message: users
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}


exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            message: user
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}


exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            message: user
        })
    } 
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}


exports.updateUser = async (req, res) => {
    try {
        user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
           runValidators: true
     })
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            message: null
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}