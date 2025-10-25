require('dotenv').config();

module.exports = {

  development: {
    client: 'pg', 
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,      
      password: process.env.DB_PASSWORD,     
      database: process.env.DB_NAME   
    },
    migrations: {
      directory: './migrations' // where migration files will be stored
    },
    seeds: {
      directory: './seeds' // optional: seed data folder
    }
  }

};
