/** @type {import('next').NextConfig} */

const nextConfig = {};

export const images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'kidstkd.pockethost.io',
            port: '',
            pathname: '/api/files/**',
        },
    ],
};

