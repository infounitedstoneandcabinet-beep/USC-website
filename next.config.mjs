/** Static export: the site is plain files, previewed locally and deployed anywhere. */
const config = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Set only by the workbench's preview build (its packages are kept beside the site); empty everywhere else.
  ...(process.env.OPC_SITE_ROOT ? { turbopack: { root: process.env.OPC_SITE_ROOT } } : {}),
};
export default config;
