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
        destination: "http://195.49.215.130:8081/api/:path*",
      },
    ];
  },
};
