const db = require("../data/dbConfig.js");

module.exports = {
  getEvents
}

function getEvents() {
  return db('events');
}