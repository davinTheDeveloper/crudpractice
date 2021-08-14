const express = require("express");
const dataOneRouter = require("./dataOne/dataOne.router");
const dataTwoRouter = require("./dataTwo/dataTwo.router");

const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());


app.use("/dataOne", dataOneRouter);
app.use("/dataTwo", dataTwoRouter);


//not found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    console.error(err);
    res.json({error: err.message});
});


module.exports = app;