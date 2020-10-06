const router = require('express').Router();

const db = require('./calendar-model.js');

router.get('/', (req, res) => {
  db.getEvents()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;