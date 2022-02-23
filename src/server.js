
const express = require('express');
const app = express();
const cors= require('cors');

const connect = require("./config/db");

const userRouter = require("./routes/user.router");
const lectureRouter = require("./routes/lecture.router");

app.use(cors());
app.use(express.json());

app.use("/users",userRouter);
app.use("/lectures", lectureRouter);

const start = async ()=>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listen on port 5000");
    })
}

module.exports = start;