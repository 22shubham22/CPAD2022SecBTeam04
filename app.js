const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/upload/upload');
app.use(morgan('dev'));

//routes for api
app.use('/upload', productRoutes);
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status  = 404;
    next(error);
})
app.use((error,req,res,next) => {
    res.status = error.status || 500;
    res.json({
        error : {
            message : error.message
        }
    });
})
module.exports = app;
