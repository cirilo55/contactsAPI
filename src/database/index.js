const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
})

client.connect();

exports.query = async (query, params) =>
{
  const { rows } = await client.query(query, params);
  return rows;
}

