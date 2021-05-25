const withPlugins = require("next-compose-plugins");
const SCSS = require("@zeit/next-sass");

module.exports = {
  future: { webpack5: true, strictPostcssConfiguration: true },
  experimental: {
    optionalCatchAll: true,
  },
  images: {
    domains: ["avatars1.githubusercontent.com"],
  },
  ...withPlugins([[SCSS]], {
    webpack: (config, { isServer }) => {
      config.module.rules.push(
        {
          test: /\.(png|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          loader: "sass-loader",
          test: /.scss$/,
          options: {
            sassOptions: {
              outputStyle: "expanded",
              sourceMap: true,
            },
          },
        }
      );

      if (isServer) {
        // eslint-disable-next-line node/no-missing-require
        require("./scripts/create-components-export-index");
      }

      config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg", ".scss"];
      return config;
    },
  }),
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line node/no-missing-require
      require("./scripts/create-components-export-index");
    }
    return config;
  },
};

module.exports.env = {
  OAUTH: {},
};
