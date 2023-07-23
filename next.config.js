
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './app/image.ts',
  // },
}

module.exports = nextConfig
