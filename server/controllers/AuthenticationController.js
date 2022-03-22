const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    }) 
}

exports.signup = async (req, res ,next) => {
    try {
        const newUser = await User.create(req.body)

        const token = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user : newUser
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

exports.login = async (req, res, next) => {
    const { email, password } = req.body

    // 1)check if email and password exist
    if(!email || !password){
        return next(res.status(400).json({
            status: 'fail',
            message: 'please provide email and password'
        }))
    }

    // 2)check if user exists && password is correct
    const user =  await User.findOne({email}).select('+password')
    // const  correct = await user.correctPassword(password, user.password)

    if(!user || !(await user.correctPassword(password, user.password))){
        return next(res.status(404).json({
            status: 'fail',
            message: 'Incorrect email or password'
        }))
    }

    // console.log(user)
    // 3) if everything is okay, send token to the client


    const token = signToken(user._id)
 
    res.status(200).json({
        status: 'Success',
        token
    })
}