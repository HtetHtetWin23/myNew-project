// Update with your config settings.
const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'weareone',
      database: 'cms'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
  // ,
  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host: '127.0.0.1',
  //     user: 'root',
  //     password: 'password',
  //     database: 'budget_flow_db'
  //   },
  //   migrations: {
  //     directory: path.join(BASE_PATH, 'migrations')
  //   },
  //   seeds: {
  //     directory: path.join(BASE_PATH, 'seeds')
  //   }
  // }

};