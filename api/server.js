const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const eventsRouter = require('../events/events-router.js');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  cors({
      origin: "*",
      credentials: false, 
  })
);

app.use('/events', eventsRouter);

app.get('/', (req, res) => {
  res.send({ confirmed: 'api working as intended' })
});

module.exports = app;