const express= require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello Chand!')
})
module.exports=app;