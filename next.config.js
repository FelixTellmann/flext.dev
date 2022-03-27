module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "avatars1.githubusercontent.com"],
  },
  webpack: (config, { isServer }) => {
    function at(n) {
      // ToInteger() abstract op
      n = Math.trunc(n) || 0;
      // Allow negative indexing from the end
      if (n < 0) n += this.length;
      // OOB access is guaranteed to return undefined
      if (n < 0 || n >= this.length) return undefined;
      // Otherwise, this is just normal property access
      return this[n];
    }

    const TypedArray = Reflect.getPrototypeOf(Int8Array);
    for (const C of [Array, String, TypedArray]) {
      Object.defineProperty(C.prototype, "at", {
        value: at,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

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
