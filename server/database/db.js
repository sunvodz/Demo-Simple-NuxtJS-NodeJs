const util = require('./util')
const config = require('../config')

const knex = require('knex')({
  client: 'mysql',
  connection: config.db,
  debug: true,
  postProcessResponse(result) {
    if (Array.isArray(result)) {
      if (result.length === 2 && Array.isArray(result[0])) { // raw result
        return result[0].map(row => typeof row === 'number' ? row : util.snakeToCamel(row))
      }
      return result.map(row => typeof row === 'number' ? row : util.snakeToCamel(row))
    } else {
      return util.snakeToCamel(result)
    }
  },
  wrapIdentifier(value) {
    if (value === '*') {
      return value
    }
    return '`' + util.camelToSnake(value) + '`'
  },
})

module.exports = knex