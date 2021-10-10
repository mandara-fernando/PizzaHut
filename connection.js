const mongoose=require("mongoose");

const MONGODB_URL='mongodb+srv://admin:admin@pizzahutmobile.vpvve.mongodb.net/PizzaHutMobile?retryWrites=true&w=majority';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('================ Database Synchronized ===================');
}
module.exports=connectDB;

