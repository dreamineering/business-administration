module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Solutions',
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  plugins: [['@vuepress/google-analytics', { ga: '' }]],
  themeConfig: {
    nav: [
      {
        text: 'Journey',
        link: '/practice-journey/'
      },
      {
        text: 'Functionality',
        link: '/functionality/'
      },
      {
        text: 'Operations',
        link: '/operations/'
      },
      {
        text: 'Wheelhouse',
        link: '/wheelhouse/'
      },
      {
        text: 'Growth Stories',
        link: '/growth-stories/'
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      '/',
      './practice-journey/',
      './functionality/',
      './operations/',
      './wheelhouse/',
      './growth-stories/'
    ]
  }
};
