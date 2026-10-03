const app= require("./src/app.js")
const mongoose= require('mongoose')
function connectToDb(){
    mongoose.connect("mongodb://localhost:27017/ChandDB").then(()=>{
        console.log("connected to database");
    })
};
connectToDb();
app.listen(3000,()=>{
    console.log('server is connected on port 3000')
});