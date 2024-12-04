/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        NEXT_PUBLIC_FLASKAPI_URL: process.env.NEXT_PUBLIC_FLASKAPI_URL,
        AUTH_URL: process.env.AUTH_URL
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com'
            },
            {
                protocol: 'https',
                hostname: 'haveibeenpwned.com'
            },
            {
                protocol: 'http',
                hostname: 'localhost'
            }
        ],
    },
};

export default nextConfig;
