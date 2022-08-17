const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");
const withImages = require("next-images");

module.exports = withPlugins([[withVideos, withImages]], {
  images: {
    domains: ["api.ambitive.de", "cdn.chec.io", "lh3.googleusercontent.com", "photos.google.com", "i.ibb.co", "i.imgur.com"],
  },
});
