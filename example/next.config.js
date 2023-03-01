/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:64027/api/:path*',
            },
        ]
    },
}

// https://localhost:44351/

module.exports = nextConfig
