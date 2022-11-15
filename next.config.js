module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://srllab.kz/api/:path*",
      },
    ];
  },
};
