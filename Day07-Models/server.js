const app=require('./src/app.js');
const connectDb= require('./src/config/database.js');
connectDb();
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})