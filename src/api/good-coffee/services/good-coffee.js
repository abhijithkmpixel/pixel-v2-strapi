'use strict';

/**
 * good-coffee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::good-coffee.good-coffee');
