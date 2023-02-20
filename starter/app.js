require('dotenv').config();
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// middleware

app.use(express.json()); // We are not going to use it in this project, just adding so we don't forget the syntax.

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store</h1> <a href="/api/v1/products" target="_blank">Products Route</a>');
});

// products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        // connectDB
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`)); 
    } catch (error) {
        console.log(error);
    }
}

start();