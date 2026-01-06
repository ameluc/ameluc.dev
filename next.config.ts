import type { NextConfig } from "next";
import type { Header } from "next/dist/lib/load-custom-routes";

const nextConfig: NextConfig = {
    /* config options here */
    // i18n: {
    // locales: [ "en", "fr" ],
    // defaultLocale: "en",
    // },
    async headers(): Promise<Header[]> {
        return [{
            source: "/(.*)",
            headers: [
                {
                    "key": "X-Content-Type-Options",
                    "value": "nosniff"
                },
                {
                    "key": "X-Frame-Options",
                    "value": "DENY"
                },
                {
                    "key": "X-XSS-Protection",
                    "value": "1; mode=block"
                },
                {
                    "key": "Referrer-Policy",
                    "value": "strict-origin-when-cross-origin"
                },
                // {
                //     "key": "Content-Security-Policy",
                //     "value": "default-src 'self'"
                // },
                {
                    "key": "Access-Control-Allow-Origin",
                    "value": "*"
                },
                {
                    "key": "Access-Control-Allow-Methods",
                    "value": "GET, POST, PUT, DELETE, OPTIONS"
                },
                {
                    "key": "Access-Control-Allow-Headers",
                    "value": "Content-Type, Authorization"
                },
                {
                    "key": "X-DNS-Prefetch-Control",
                    "value": "on"
                },
                {
                    "key": "Strict-Transport-Security",
                    "value": "max-age=63072000; includeSubDomains; preload"
                },
                {
                    "key": "Referrer-Policy",
                    "value": "origin-when-cross-origin"
                }
            ]
        }]
    },
    "reactCompiler": true,
};

export default nextConfig;
