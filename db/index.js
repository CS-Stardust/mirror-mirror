const { Pool } = require('pg')


const pool = new Pool({ connectionString: 'postgres://efqwjvxh:Q_XJY3S0cNTzYaZit4T_1VL8Oz2h_67r@pellefant.db.elephantsql.com:5432/efqwjvxh' });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}