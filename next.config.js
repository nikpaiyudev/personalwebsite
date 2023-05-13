/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/me",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "img.freepik.com",
      "i.pinimg.com",
      "readyplayer.me",
    ],
  },
};

module.exports = nextConfig;
