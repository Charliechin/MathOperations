// import Operation from './operation';
import express from 'express';
import path from 'path';

var app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);



