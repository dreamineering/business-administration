module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Solutions',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }]],
  themeConfig: {
    nav: [
      {
        text: 'Practice Journey',
        link: '/practice-journey/'
      },
      {
        text: 'Business Administration',
        link: '/business-administration/'
      }
    ],
    sidebar: {}
  }
};
