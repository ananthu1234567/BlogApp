const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ananthan:ananthan@cluster0.0fd0sen.mongodb.net/Blogapp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connneted")
})
.catch(()=>{
    console.log(error)
})