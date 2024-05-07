const path = require('path');

module.exports = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
      
        return config;
      },
      async redirects() {
        return [
          {
            source: '/about-us',
            destination: '/about',
            permanent: true,
          },
          {
            source: '/products/:path',
            destination: '/',
            permanent: true,
          },
          {
            source: '/products',
            destination: '/',
            permanent: true,
          },
          {
            source: '/how-it-works',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
