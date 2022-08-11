// https://dev.to/chromygabor/add-typescript-type-check-to-next-js-2nbb
// nextjsはデフォルトだとbuild時にしかtypescriptの型checkをいれてくれないので
// 下記を書くことで開発中にリアルタイムでチェックできるようにしている

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
}

module.exports = nextConfig
