module.exports = require('knex')({
    client: 'mysql',
    connection: {
      host : 'us-cdbr-iron-east-05.cleardb.net',
      user : 'b250f106e12e2a',
      password : '91bc6f06',
      database : 'heroku_a98559dc874212b'
    }
  });