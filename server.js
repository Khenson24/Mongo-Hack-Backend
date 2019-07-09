const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

const items = require('./routes/api/items')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/routes/api/items', items);
  

app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));