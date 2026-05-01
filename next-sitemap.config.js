const path = require('path');

const blogs = require(path.resolve('./src/data/blogs.json'));
const services = require(path.resolve('./src/data/services.json'));
const solutions = require(path.resolve('./src/data/solutions.json'));

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://veloriqip.com",
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.8,
  transform: async (config, path) => {
    if (path.startsWith("/insights/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    if (path.startsWith("/service/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    if (path.startsWith("/solution/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  extraPaths: [
    ...blogs.map((blog) => `/insights/${blog.slug}`),
    ...services.map((service) => `/service/${service.slug}`),
    ...solutions.map((solution) => `/solution/${solution.slug}`),
  ],
};
