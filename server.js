const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

const Hacks = require('./routes/api/Hacks');
const Users = require('./routes/api/Users');

// const Hacks = express.Router().use(require('./routes/api/Hacks'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/Hacks', Hacks);
app.use('/api/Users', Users);

  

app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));