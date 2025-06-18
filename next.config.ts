/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: If your GitHub Pages URL will be a subpath (e.g., yourusername.github.io/your-repo-name/)
  // you need to set basePath and assetPrefix.
  // Replace 'your-repo-name' with your actual GitHub repository name.
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',

  // If you're using next/image, you might need to unoptimize them for static export.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;