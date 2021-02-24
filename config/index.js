const dotenv = require('dotenv').config()

const SERVICE_HOST = process.env.HOST || 'http://localhost'
const SERVICE_PORT = process.env.PORT || 8000
const SERVICE_API = process.env.API || 'http://localhost:8000'
const SERVICE_SECRET = process.env.SECRET || ''
const SERVICE_DATABASE = process.env.MONGO_URI ||
  'mongodb://locahost:207017/sst8'

exports.server = { host: SERVICE_HOST, port: SERVICE_PORT, api: SERVICE_API }

exports.database = { db: SERVICE_DATABASE }

exports.secret = { string: SERVICE_SECRET }
