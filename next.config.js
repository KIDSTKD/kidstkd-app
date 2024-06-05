/** @type {import('next').NextConfig} */

const nextConfig = {

}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kidstkd.pockethost.io',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
};




 
