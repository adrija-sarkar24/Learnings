//used to start(listen) the server
const app = require('./src/app.js');
const connectDb = require('./src/config/database.js');
connectDb();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
