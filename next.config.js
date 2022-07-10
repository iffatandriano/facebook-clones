/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "pbs.twimg.com",
      "i0.lisimg.com",
      "th.bing.com",
      "researchsnipers.com",
    ],
  },
};

module.exports = nextConfig;
