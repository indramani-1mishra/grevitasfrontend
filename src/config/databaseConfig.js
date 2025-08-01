const mongoose = require('mongoose');
const { MONGO_URL } = require('./serverConfig');

const connectDv = async()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Database added succesfully');
    }
    catch(error){
        console.log(error);
    }
}
module.exports = connectDv;