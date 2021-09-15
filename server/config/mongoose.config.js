// 1. Import mongoose
const mongoose = require('mongoose');
const DB = "my_db"

// 2. connect mongoose to MongoDB
mongoose.connect("mongodb://localhost/"+DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=>console.log(`Connected to ${DB} db`))
    .catch((err) => console.log(`Error connecting to ${DB}`, err))