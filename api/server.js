const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ confirmed: 'api working as intended' })
});

module.exports = app;