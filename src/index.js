const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.js');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use('/apiClient', userRoutes);
//Routes
app.get('/', (req, res) => {
    res.send("AYE AYE Sir.");
});

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error("Something went wrong", error));

app.listen(9000, () => console.log('Listen on port', port));