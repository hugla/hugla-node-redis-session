"use strict";

const session = require('express-session');
const RedisStore = require('connect-redis')(session);

/**
 * HuglaRedisSession - hugla web framework's node back-end redis session module
 */
class HuglaRedisSession {

  /**
   * Class constructor
   * @param {object} app Hugla app
   * @param {object} app.config Configuration object
   * @param {object} app.config.redisSession RedisSession config
   * @param {object} [app.config.redisSession.host] Redis server host
   * @param {object} [app.config.redisSession.port] Redis server port
   * @param {object} [app.config.redisSession.db] Redis server db index
   * @param {object} [app.config.redisSession.sessionSecret] Session secret
   * @param {object} [app.config.redisSession.cookieName] Session cookie name
   */
  constructor(app) {
    this.config = app.config.redisSession || {};

    const http = app.getModule('hugla-http');
    http.addMiddlewareSetupAction(this.middlewareSetup.bind(this));
  }

  /**
   * Middleware setup method
   *
   * @param {object} app Express app
   */
  middlewareSetup(app) {
    app.use(session({
      store: new RedisStore({
        host: this.config.host || '127.0.0.1',
        port: this.config.port || 6379,
        db: this.config.db || 0
      }),
      secret: this.config.sessionSecret || 'keyboard cat',
      name: this.config.cookieName || 'connect.sid',
      resave: false,
      saveUninitialized: false
    }));
  }
}

module.exports = HuglaRedisSession;
