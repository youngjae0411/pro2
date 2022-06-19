'use strict'

const fp = require('fastify-plugin')
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/mongodb'), {
        // force to close the mongodb connection when app stopped
        // the default value is false
        forceClose: true,
        
        url: "mongodb://admin:root@mongo-f809c7a7992a771d.elb.ap-northeast-2.amazonaws.com:27017/baedal"
      })
    })