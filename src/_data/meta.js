module.exports = {
  env: process.env.ELEVENTY_ENV,
  // NOTE: `process.env.URL` is provided by Netlify, and may need adjusted pending your host
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Nick Chrysis',
  siteDescription: '',
  socials: {
    spotify: 'https://open.spotify.com/artist/3osiMoqYBRTo27au6ylL6q',
    apple_music: 'https://music.apple.com/us/artist/nick-chrysis/1570515212',
    instagram: 'https://www.instagram.com/nick.chrysis/',
    facebook: 'https://www.facebook.com/profile.php?id=598205428'
  },
  contact: {
    phone: '+31 6 45333604',
    email: 'contact@nickchrysis.com'
  }
};