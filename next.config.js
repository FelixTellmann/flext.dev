module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.vercel.com",
      "avatars1.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line node/no-missing-require
      // require("./scripts/create-components-export-index");
    }
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.http = false;
      config.resolve.fallback.https = false;
      config.resolve.fallback.cardinal = false;
    }

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });

    return config;
  },
  experimental: {
    externalDir: true,
  },
};
