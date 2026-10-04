const mongoose= require('mongoose');

function connectDb(){
    mongoose.connect('mongodb+srv://reenabibi5678_db_user:3DRmRS5u4OOJmNFs@cohort.cuszlc6.mongodb.net/test').then(()=>{
        console.log('Connected to Database');
    })
}
module.exports=connectDb;