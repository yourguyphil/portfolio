/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out,
  // which can be hosted on any free static host (Vercel, Cloudflare Pages,
  // Azure Static Web Apps free tier, GitHub Pages, ...).
  output: "export",
  turbopack: { root: import.meta.dirname },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
