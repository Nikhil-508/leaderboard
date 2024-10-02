const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./Routes/userRoutes')
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


//>>>>>>>>>>>>>>>>>>> MongoDB connection <<<<<<<<<<<<<<<<<<<<

const mongo_conn = process.env.MONGO_URI;
mongoose.connect(mongo_conn)
.then(() => console.log("Database connected"))
.catch((error) => console.log("Database connection error",error));


app.use("/user",userRoutes);

//>>>>>>>>>>>>>>>>>>> Server Setup <<<<<<<<<<<<<<<<<<<<

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
