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
    webpack(config, { isServer }) {
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

      if (!isServer) {
        config.node = {
          fs: "empty",
        };
      }

      config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg", ".scss"];
      return config;
    },
  }),
};

module.exports.env = {
  OAUTH: {},
};
