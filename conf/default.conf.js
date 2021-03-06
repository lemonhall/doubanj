var util = require('util');

/**
 * some default settings
 */
module.exports = {
  worker: 4,
  // the port of the root server
  port: 3000,

  debug: true,

  site_name: '豆瓣酱',

  site_root: 'http://127.0.0.1:3000/',
  assets_root: 'http://127.0.0.1:3000/',

  // whether to send gzipped content
  gzip: true,
  super_cache: true,

  sessionStore: {
    memcached: true,
    dbname: 'sessions',
    // save session storage to file system every 30 minutes
    sync_time: 30
  },

  salt: 'keyboardcatndog',

  mongo: {
    dbname: 'doubanj',
    servers: ['127.0.0.1:27017']
  },

  douban: {
    limit: 40, // request limit per minute
    key: 'appkey',
    secret: 'secret'
  },

  // google analytics id
  ga_id: ''
};
