'use strict';

/**
 * lead controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lead.lead', {
  async create(ctx) {
    const { email } = ctx.request.body.data;  // Access the email from the request

    // Check if the email already exists in the database
    const existingLead = await strapi.db.query('api::lead.lead').findOne({
      where: { email },
    });

    if (existingLead) {
      // If the email already exists, return a custom error message
      return ctx.badRequest('Email already in use.');
    }

    // Proceed with the creation of the lead if no duplicates are found
    return super.create(ctx);
  },
});
