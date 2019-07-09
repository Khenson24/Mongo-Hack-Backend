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


app.use('/api/items', items);

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
  
  

app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));