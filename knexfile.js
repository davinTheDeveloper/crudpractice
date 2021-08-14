require("dotenv").config();

module.exports = {

  deevelopment: {
    client: 'postgresql',
    connection: {
      database: 'dataOne',
      user: 'davinhenrik',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_connections"
    }
  },
};


