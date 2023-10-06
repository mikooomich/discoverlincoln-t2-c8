/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['assets.example.com', "discoverlincoln-t2-c8-bucket.s3.amazonaws.com"] // <== Domain name
  }
}


module.exports = nextConfig
