# HuglaHttp
### Hugla web framework's node back-end redis session module

[![Build Status](https://travis-ci.org/hugla/hugla-node-redis-session.svg?branch=master)](https://travis-ci.org/hugla/hugla-node-redis-session)
[![Coverage Status](https://coveralls.io/repos/hugla/hugla-node-redis-session/badge.svg?branch=master&service=github)](https://coveralls.io/github/hugla/hugla-node-redis-session?branch=master)

## Requirements

The following configuration properties are optional

```json

{
  "redisSession": {
    "host": "localhost",
    "port": "6379",
    "db": 0,
    "sessionSecret": "keyboard cat",
    "cookieName": "connect.sid"
  }
}

```

## License

[MIT](LICENSE)
