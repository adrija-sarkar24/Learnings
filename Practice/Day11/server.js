const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app.js");
const connectDB = require("./src/config/database.js");
connectDB();
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})