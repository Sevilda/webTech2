const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sweetRoute = require('./routes/sweets_route')
const userRoute = require('./routes/user_route')
const cors = require('cors')


const app = express();

const mongoURL = 'mongodb://127.0.0.1:27017/sweets_shop';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', mongoURL)
});
db.on('error', err => {
  console.log('Connection error:', err)
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());
app.use("/api", sweetRoute)
app.use("/api", userRoute)


app.listen(process.env.PORT || 8080);




module.exports = app;
