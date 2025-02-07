"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user; // Get authenticated user

    if (!user) {
      return ctx.unauthorized("You must be logged in.");
    }

    console.log("Request Body:", ctx.request.body);

    ctx.request.body.data = ctx.request.body.data || {}; // Ensure data exists
    ctx.request.body.data.author_uuid = ctx.state.user?.uuid || "default-uuid";

    // Use the UUID from the logged-in user
    ctx.request.body.data.author_uuid = user.uuid;

    return await super.create(ctx);
  },

  async find(ctx) {
    const user = ctx.state.user; // Get authenticated user

    // if (!user) {
    //   return ctx.unauthorized("You must be logged in.");
    // }

    // // Ensure that only posts created by the current user are returned
    // const entities = await strapi.db.query("api::post.post").findMany({
    //   where: { author_uuid: user.uuid },
    //   populate: true,
    // });

    // const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

    return this.transformResponse(ctx);
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::post.post").findOne({
      where: { slug },
      populate: true,
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
