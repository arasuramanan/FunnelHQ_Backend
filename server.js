require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db/connect');
const userRoutes = require("./routes/userRoutes");
const app = express();

db();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

const PORT = 5000;
const MONGOOSE_URL =process.env.MONGO_URL;

mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true})
.then(()=> app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
}))
.catch(err=>{
    console.log(err);
})