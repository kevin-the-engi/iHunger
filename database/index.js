const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection error:')
});

db.once('open', () => {
  console.log('connected to MongoDB');
});

module.exports = db;