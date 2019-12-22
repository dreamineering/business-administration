module.exports = {
  title: 'Gensolve',
  description: 'Practice Management Software that saves you time and drives patient satisfaction',
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
      './business-administration/',
      './insights/',
      './growth-stories/'
    ]
  }
};
