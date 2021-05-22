const withPlugins = require("next-compose-plugins");
const SCSS = require("@zeit/next-sass");

module.exports = {
  future: { webpack5: true, strictPostcssConfiguration: true },
  experimental: {
    optionalCatchAll: true,
  },
  images: {
    domains: ["assets.vercel.com", "avatars1.githubusercontent.com"],
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
  AWS_PROJECT_REGION: process.env.AWS_PROJECT_REGION,
  AWS_APPSYNC_GRAPHQLENDPOINT: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  AWS_APPSYNC_REGION: process.env.AWS_APPSYNC_REGION,
  AWS_APPSYNC_AUTHENTICATIONTYPE: process.env.AWS_APPSYNC_AUTHENTICATIONTYPE,
  AWS_APPSYNC_APIKEY: process.env.AWS_APPSYNC_APIKEY,
  AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
  AWS_USER_POOLS_ID: process.env.AWS_USER_POOLS_ID,
  AWS_USER_POOLS_WEB_CLIENT_ID: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
  OAUTH: {},
};
