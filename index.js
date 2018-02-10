const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//const config = require('./config/database');
var https = require('https');
//var io = require('socket.io')(http);
// Connect To Database
//mongoose.connect(config.database);

/* On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});
*/
const app = express();

const hospitals = require('./routes/hospitals');
const doctor=require('./routes/doctor');
// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);

app.use('/hospital', hospitals);
app.use('/doctors',doctor);
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
  });
  
  // Start Server
  app.listen(port, () => {
    console.log('Server started on port '+port);
  });
