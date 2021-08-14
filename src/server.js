const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const db = require('knex')(connection);
const app = require('./app');

app.set('db', db);

app.listen(3000, () => console.log('Server is listening on port: 3000'));
