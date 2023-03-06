/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:64027/api/:path*',
            },
        ]
    },
}

module.exports = nextConfig
