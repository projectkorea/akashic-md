// Importing the necessary modules using ESM syntax
import withMDX from '@next/mdx';

// Define the MDX configuration
const mdxConfig = withMDX();

// Define the Next.js configuration
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

// Export the combined configuration using ESM syntax
export default { ...mdxConfig, ...nextConfig };
