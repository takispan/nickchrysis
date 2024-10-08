module.exports = {
  env: process.env.ELEVENTY_ENV,
  // NOTE: `process.env.URL` is provided by Netlify, and may need adjusted pending your host
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Nick Chrysis',
  siteDescription: '',
  socials: {
    spotify: 'Spotify',
    instagram: 'Instagram',
  }
};