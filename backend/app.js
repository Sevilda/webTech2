const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const url;

const manufacturersRoutes = require("./routes/manufacturers");
const carsRoutes = require("./routes/cars");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const database = mongoose.connection;
database.once('open', () => {
  console.log('Database connected:', url)
});
db.on('error', err => {
  console.log('Connection error:', err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS, PUT");
  next();
});

app.use("/api/manufacturers", manufacturersRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
