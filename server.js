// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files serve කරන්න public folder එකෙන්
app.use(express.static(path.join(__dirname, 'public')));

// api folder එකේ modules import කරලා routes set කරන්න
const mega = require('./api/mega');
const genId = require('./api/gen-id');

app.use('/mega', mega);
app.use('/gen-id', genId);

// Root path එකේ main.html serve කරන්න
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// /qr, /pair routes serve කරන්න (public folder එකේ files)
app.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'qr.html'));
});
app.get('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pair.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
