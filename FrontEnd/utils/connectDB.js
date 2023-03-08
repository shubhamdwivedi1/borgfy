const mongoose = require('mongoose');

async function connectDB(){
try {
    const MONGO_URL = 'mongodb://127.0.0.1:27017/AdminBlog';
    // await mongoose.connect(MONGO_URL,{
    //     useUnifiedTopology:true,
    //     useNewUrlParser:true
    // });
    await mongoose.connect(MONGO_URL)
    console.log('Connected to mongodb')
} catch (error) {
    console.log(error)
}
}

module.exports = connectDB;