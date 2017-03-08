/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

'use strict'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    someteststore: {
      //migration
      migrate: 'create',
      // Mongodb URI
      uri: 'mongodb://localhost:27017/quru',
      // Mongoose connection options
      options: {

      }
    }
  },

  models: {
    defaultStore: 'someteststore',
    migrate: 'drop'
  }

}
