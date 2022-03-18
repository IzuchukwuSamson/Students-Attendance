const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
Tour = require('./../../models/tourModels')
User = require('./../../models/userModels')
Review = require('./../../models/reviewModels')


// CONFIG.ENV CONNECTION
dotenv.config({path: './config.env'});

// DATABASE
const database = process.env.DATABASE_LOCAL

mongoose.connect(database, {
    
    // useNewUrlParser: true,
    // useCreateIndex : true,
    // useFindANdModify : false

}).then(() => console.log('DB Connection Successful'))


// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));

//IMPORT DATA INTO DATABASE
const importData = async () => {
    try{
        await Tour.create(tours);
        await User.create(users, { validateBeforeSave: false});
        await Review.create(reviews);
        console.log('Data Successfully Loaded!');
        
    }
    catch(err){
        console.log(err)
    }
    process.exit()
};

// DELETE ALL DATA FROM DATABASE
const deleteData = async () => {
    try{
        await Tour.deleteMany();
        await User.deleteMany();
        await Review.deleteMany();
        console.log('Data successfully deleted!');
    }
    catch(err){
        console.log(err)
    }
    process.exit()
}


if(process.argv[2] === '--import'){
    importData()
}
else if(process.argv[2] === '--delete'){
    deleteData()
}

console.log(process.argv)