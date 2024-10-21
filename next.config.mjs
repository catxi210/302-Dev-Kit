import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: "standalone",
  experimental: {
    typedRoutes: true,
  },
  // images: {
  // }
};

export default nextConfig;
