import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            /* Images from DaisyUI, remove later */
            {
                protocol: "https",
                hostname: "img.daisyui.com"
            }
        ],
    },
};

export default nextConfig;
