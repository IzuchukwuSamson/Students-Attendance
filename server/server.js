const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})
const mongoose = require('mongoose')


const app = require('./app')


const db = process.env.DATABASE_LOCAL
mongoose.connect( db, {

}).then(() => console.log('DB connection was successful'))


console.log(app.get('env'))
// console.log(process.env)

// const port = 8000
// app.listen(port, () => {
//     console.log(`App running on port ${port}`)
// })

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})