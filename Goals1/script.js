// const express = require('express');
// const PORT = process.env.PORT || 6000
// const connectDb = require("./config/db");
// const errMid = require("./middleWare/errMid")
// const dotenv = require("dotenv").config()
// const { urlencoded } = require("express")

// connectDb();

// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use("/goal/api", require("./router/route"));
// app.use(errMid)

// app.listen(PORT, () => console.log(`App listening on ${PORT}`))

const express = require("express");

const PORT = process.env.PORT || 6000;

const connectDB = require('./config/db');

const errMid = require('./middleWare/errMid');

const dotenv = require('dotenv').config();

const { urlencoded } = require('express');

connectDB();

const app = express();

app.use(express.json());

app.use(urlencoded({ extended: true }));

app.use('/goal/api', require('./router/route'));

app.use(errMid);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));

