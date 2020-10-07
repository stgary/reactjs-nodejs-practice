const moment = require('moment');

exports.seed = function(knex) {
  return knex('events').insert([
    { 
      start: 'Tue Oct 06 2020 9:00:00 GMT-0400 (Eastern Daylight Time)', 
      end: 'Tue Oct 06 2020 10:00:00 GMT-0400 (Eastern Daylight Time)',
      title: 'morning meeting',
      description: 'meeting before the start of the day'
    },
    { 
      start: 'Tue Oct 06 2020 12:00:00 GMT-0400 (Eastern Daylight Time)', 
      end: 'Tue Oct 06 2020 13:00:00 GMT-0400 (Eastern Daylight Time)',
      title: 'lunch',
      description: 'replenishing the reserves'
    },
    { 
      start: 'Wed Oct 07 2020 10:30:00 GMT-0400 (Eastern Daylight Time)', 
      end: 'Wed Oct 07 2020 11:45:00 GMT-0400 (Eastern Daylight Time)',
      title: 'doctors appointment',
      description: 'make sure im still kickin'
    },
    { 
      start: 'Fri Oct 09 2020 20:00:00 GMT-0400 (Eastern Daylight Time)', 
      end: 'Fri Oct 09 2020 22:00:00 GMT-0400 (Eastern Daylight Time)',
      title: 'dinner date',
      description: 'see if I still got it'
    }
  ]);
};