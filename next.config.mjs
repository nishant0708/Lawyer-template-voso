/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vosovyapar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8585",
        pathname: "/**",
      },
      {
        protocol: "http", // Protocol used by the URL (http or https)
        hostname: "res.cloudinary.com", // Hostname of the remote image server
        port: "", // Port used by the URL (if any)
        pathname: "/dc3yjgni3/image/upload/**", // Pathname pattern to match the URLs
      },
      {
        protocol: "https", // Protocol used by the URL (http or https)
        hostname: "**", // Hostname of the remote image server
      },
    ],
  },
};

export default nextConfig;