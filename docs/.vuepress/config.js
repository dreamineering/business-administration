module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Software that saves you time and drives patient satisfaction',
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
        text: 'Insights',
        link: '/insights/'
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
      './insights/',
      './growth-stories/'
    ]
  }
};
