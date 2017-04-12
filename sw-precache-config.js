module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/404.html',
    '/manifest.json',
    '/src/*',
    '/src/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,md}',
    '/bower_components/*',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  navigateFallback: '/index.html'
};
