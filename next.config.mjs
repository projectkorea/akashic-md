// Importing the necessary modules using ESM syntax
import withMDX from '@next/mdx'

// Define the MDX configuration
const mdxConfig = withMDX({
  extension: /\.mdx?$/,
})

// Define the Next.js configuration
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,OPTIONS', // Specify allowed methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization', // Specify allowed headers
          },
        ],
      },
    ]
  },
}

// Export the combined configuration using ESM syntax with a named export
const combinedConfig = { ...mdxConfig, ...nextConfig, env: { NOTION_API_KEY: process.env.NOTION_API_KEY } }
export default combinedConfig
