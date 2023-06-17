/** @type {import('next').NextConfig} */
// next.config.js
const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['~'] = path.resolve(__dirname, './src');
        return config;
    },
};