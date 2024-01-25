/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "image.tmdb.org",
            "upload.wikimedia.org",
            "uhdtv.io",
            "mango.blender.org",
            "download.blender.org"
        ],
    },
};

export default nextConfig;
