'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async findByAuthor(ctx) {
    const { authorId } = ctx.params;
    const posts = await strapi.db.query('api::post.post').findMany({
      where: { author: authorId },
      populate: ['categories', 'tags', 'author'],
    });
    return posts;
  },

  async findPublic(ctx) {
    const posts = await strapi.db.query('api::post.post').findMany({
      where: { publishedAt: { $notNull: true } },
      populate: ['categories', 'tags', 'author'],
    });
    return posts;
  }
})); 