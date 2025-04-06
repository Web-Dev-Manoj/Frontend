const dotenv = require('dotenv').config();
const express = require('express');
const http = require

const app = express();
const port = process.env.PORT || 5000;

// const port = 5000; //static way of declaring env's.
// but, it is best practise to include all details in .env file.

// app.get('/api/contacts', (req, res) => {
//     // res.send('Get All contacts!'); // sending data in normal format
//     res.status(200).json({ message: 'Get All Contacts!' }) // sending data in json format
// })

app.use(express.json());
// imp:point
// You need to define this before creating any routes.
// otherwise, will face an error and the data will be undefined

app.use('/api/contacts', require('./routes/contactRoutes')); // This is called middleware

app.listen(port, () => {
    console.log(`Serving running in ${port}`);
})

