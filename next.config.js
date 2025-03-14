import { resolve } from "path";
import secp256k1 from "@bitcoinerlab/secp256k1";

const nextConfig = {
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "tiny-secp256k1": resolve("node_modules/@bitcoinerlab/secp256k1"),
    };

    return config;
  },
};

export default nextConfig;
