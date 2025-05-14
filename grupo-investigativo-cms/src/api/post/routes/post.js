'use strict';

/**
 * post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post', {
  config: {
    find: {
      policies: [],
      middlewares: [],
    },
    findOne: {
      policies: [],
      middlewares: [],
    },
    create: {
      policies: [],
      middlewares: [],
    },
    update: {
      policies: [],
      middlewares: [],
    },
    delete: {
      policies: [],
      middlewares: [],
    },
  },
  routes: [
    {
      method: 'GET',
      path: '/posts/author/:authorId',
      handler: 'post.findByAuthor',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/posts/public',
      handler: 'post.findPublic',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}); 