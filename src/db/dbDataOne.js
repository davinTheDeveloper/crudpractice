const knex = require("knex");
const knexfile = require('./knexfile');

const dbDataOne = knex(knexfile.development);

module.exports = dbDataOne;