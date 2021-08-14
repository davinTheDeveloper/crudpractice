const knex = require("knex");
const knexfile = require('./knexfile');

const dbDataTwo = knex(knexfile.development);

module.exports = dbDataTwo;